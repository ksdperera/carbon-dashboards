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

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.wso2.carbon.config.ConfigurationException;
import org.wso2.carbon.config.provider.ConfigProvider;
import org.wso2.carbon.dashboards.core.exception.DashboardException;
import org.wso2.carbon.database.query.manager.exception.QueryMappingNotAvailableException;
import org.wso2.carbon.datasource.core.api.DataSourceService;
import org.wso2.carbon.datasource.core.exception.DataSourceException;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.sql.SQLException;
import javax.sql.DataSource;

/**
 * Factory for {@link DashboardMetadataDao} class.
 *
 * @since 4.0.0
 */
public class DashboardMetadataDaoFactory {

    private static final String DATA_SOURCE_NAME_DASHBOARD = "WSO2_DASHBOARD_DB";
    private static final Logger log = LoggerFactory.getLogger(DashboardMetadataDaoFactory.class);

    /**
     * Creates a new DAO.
     *
     * @param dataSourceService data sources service
     * @param configProvider    config provider
     * @return DAO
     * @throws DashboardException if cannot find required data source
     */
    public static DashboardMetadataDao createDao(DataSourceService dataSourceService, ConfigProvider configProvider)
            throws DashboardException {
        DataSource dataSource;
        QueryManager queryManager;
        try {
            dataSource = (DataSource) dataSourceService.getDataSource(DATA_SOURCE_NAME_DASHBOARD);
            Connection connection = null;
            try {
                connection = dataSource.getConnection();
                DatabaseMetaData databaseMeta = connection.getMetaData();
                queryManager = new QueryManager(databaseMeta.getDatabaseProductName(),
                        databaseMeta.getDatabaseProductVersion(), configProvider);
            } catch (IOException | QueryMappingNotAvailableException |
                    ConfigurationException | SQLException e) {
                throw new DashboardException("Error in initializing database !", e);
            } finally {
                if (connection != null) {
                    try {
                        connection.close();
                    } catch (SQLException e) {
                        log.warn("Database error. Could not close database connection. Continuing with " +
                                "others. - " + e.getMessage(), e);
                    }
                }
            }
        } catch (DataSourceException e) {
            throw new DashboardException("Cannot find data source named '" + DATA_SOURCE_NAME_DASHBOARD + "'.", e);
        }
        return new DashboardMetadataDao(dataSource, queryManager);
    }
}
