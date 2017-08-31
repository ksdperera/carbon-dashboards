DROP TABLE DASHBOARD_RESOURCE;
CREATE TABLE IF NOT EXISTS DASHBOARD_RESOURCE (
  DASHBOARD_ID                INTEGER      NOT NULL AUTO_INCREMENT,
  DASHBOARD_URL               VARCHAR(100) NOT NULL,
  DASHBOARD_NAME              VARCHAR(256) NOT NULL,
  DASHBOARD_DESCRIPTION       VARCHAR(1000),
  DASHBOARD_PARENT_ID         VARCHAR(100),
  DASHBOARD_LANDING_PAGE      VARCHAR(100),
  DASHBOARD_CONTENT           LONGBLOB,
  CONSTRAINT PK_DASHBOARD_RESOURCE PRIMARY KEY (DASHBOARD_ID),
  UNIQUE (DASHBOARD_ID, DASHBOARD_URL)
);