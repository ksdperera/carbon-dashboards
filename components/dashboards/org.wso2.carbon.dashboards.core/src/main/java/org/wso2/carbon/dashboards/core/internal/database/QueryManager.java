/*
 * Copyright (c) 2017, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
package org.wso2.carbon.dashboards.core.internal.database;

import org.wso2.carbon.config.ConfigurationException;
import org.wso2.carbon.config.provider.ConfigProvider;
import org.wso2.carbon.dashboards.core.bean.DashboardConfigurations;
import org.wso2.carbon.database.query.manager.QueryProvider;
import org.wso2.carbon.database.query.manager.config.Queries;
import org.wso2.carbon.database.query.manager.exception.QueryMappingNotAvailableException;
import org.yaml.snakeyaml.Yaml;
import org.yaml.snakeyaml.constructor.CustomClassLoaderConstructor;
import org.yaml.snakeyaml.introspector.BeanAccess;

import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.util.ArrayList;
import java.util.Map;

/**
 * Holds the database queries.
 */
public class QueryManager {

    public static final String ADD_DASHBOARD_CONTENT_QUERY = "add_dashboard";
    public static final String GET_DASHBOARD_METADATA_LIST_QUERY = "get_dashboard_metadata_list";
    public static final String GET_DASHBOARD_BY_URL_QUERY = "get_dashboard_by_url";
    public static final String DELETE_DASHBOARD_BY_URL_QUERY = "delete_dashboard_by_url";
    public static final String UPDATE_DASHBOARD_CONTENT_QUERY = "update_dashboard_content";

    private Map<String, String> queries;
    private ConfigProvider deploymentConfigProvider;

    public QueryManager(String databaseType, String databaseVersion, ConfigProvider configProvider) throws
            QueryMappingNotAvailableException,
            ConfigurationException, IOException {
        this.queries = readConfigs(databaseType, databaseVersion);
        this.deploymentConfigProvider = configProvider;
    }

    private Map<String, String> readConfigs(String databaseType, String databaseVersion) throws ConfigurationException,
            QueryMappingNotAvailableException, IOException {
        try {
            DashboardConfigurations deploymentConfigurations = deploymentConfigProvider
                    .getConfigurationObject(DashboardConfigurations.class);
            ArrayList<Queries> deploymentQueries = deploymentConfigurations.getQueries();
            ArrayList<Queries> componentQueries;
            URL url = this.getClass().getClassLoader().getResource("queries.yaml");
            if (url != null) {
                DashboardConfigurations componentConfigurations = readYamlContent(url.openStream());
                componentQueries = componentConfigurations.getQueries();
            } else {
                throw new RuntimeException("Unable to load queries.yaml file.");
            }
            queries = QueryProvider.mergeMapping(databaseType, databaseVersion, componentQueries, deploymentQueries);
        } catch (ConfigurationException e) {
            throw new ConfigurationException("Unable to read queries.yaml configurations: " + e.getMessage(), e);
        } catch (QueryMappingNotAvailableException e) {
            throw new QueryMappingNotAvailableException("Unable to load queries: " + e.getMessage(), e);
        } catch (IOException e) {
            throw new IOException("Unable to load content from queries.yaml file: " + e.getMessage(), e);
        }
        return queries;
    }

    public String getQuery(String key) {
        if (!this.queries.containsKey(key)) {
            throw new RuntimeException("Unable to find the configuration entry for the key: " + key);
        }
        return this.queries.get(key);
    }

    private DashboardConfigurations readYamlContent(InputStream yamlContent) {
        Yaml yaml = new Yaml(new CustomClassLoaderConstructor(DashboardConfigurations.class,
                DashboardConfigurations.class.getClassLoader()));
        yaml.setBeanAccess(BeanAccess.FIELD);
        return yaml.loadAs(yamlContent, DashboardConfigurations.class);
    }
}

