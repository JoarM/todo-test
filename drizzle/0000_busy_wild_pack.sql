CREATE TABLE `todo` (
	`id` mediumint AUTO_INCREMENT NOT NULL,
	`task` varchar(255) NOT NULL,
	`is_completed` boolean NOT NULL,
	CONSTRAINT `todo_id` PRIMARY KEY(`id`)
);
