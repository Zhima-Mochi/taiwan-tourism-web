CREATE TABLE city {
    city_id VARCHAR(30), --所屬縣市 
    city_name CHAR(10),
    PRIMARY KEY (city_id)
}
CREATE TABLE scenic_spot_tourism_info {
    id CHAR(20), -- 景點代碼 
    name VARCHAR(100), -- 景點名稱
    descriptionDetail VARCHAR(2000), -- 景點特色詳細說明 
    description VARCHAR(500), -- 景點特色精簡說明 
    phone CHAR(15), -- 景點服務電話 
    address VARCHAR(100), -- 景點地址
    travelInfo VARCHAR(200),--交通資訊
    openTime VARCHAR(200),-- 開放時間 
    mapUrl VARCHAR(500),-- 景點地圖/簡圖介紹網址 
    class1 VARCHAR(100),-- 景點分類1 
    class2 VARCHAR(100),-- 景點分類2 
    class3 VARCHAR(100),-- 景點分類3 
    level VARCHAR(100),-- 古蹟分級 
    websiteUrl VARCHAR(500),-- 景點官方網站網址 
    parkingInfo VARCHAR(200),-- 停車資訊 
    ticketInfo VARCHAR(500),-- 票價資訊 
    remarks VARCHAR(500),-- 警告及注意事項 
    keyword VARCHAR(500),-- 常用搜尋關鍵字 
    city_id VARCHAR(30),-- 所屬縣市 
    srcUpdateTime DATETIME,-- 觀光局檔案更新時間(ISO8601格式:yyyy-MM-ddTHH:mm:sszzz) 
    updateTime DATETIME,-- 本平台資料更新時間(ISO8601格式:yyyy-MM-ddTHH:mm:sszzz)
    PRIMARY KEY (id),
}

-- CREATE TABLE scenic_spot_tourism_picture {
--     picture (TourismPicture, optional),-- 景點照片 
-- }

-- CREATE TABLE scenic_spot_tourism_position {
--     Position (PointType, optional),-- 景點位置 
-- }

-- CREATE TABLE scenic_spot_tourism_parking_position {
--     parkingPosition (PointType, optional),-- 景點主要停車場位置 
-- }


