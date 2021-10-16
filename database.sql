CREATE TABLE "tasks" (
"id" SERIAL,
"task" VARCHAR (50),
"description" VARCHAR (300),
"task_complete" BOOLEAN
);

INSERT INTO "tasks" ("task", "description", "task_complete")
VALUES
('Grocery shop', 'get eggs and bacon', 'false'),
('Laundry', 'dark load', 'false'),
('Clean', 'kitchen and bathroom', 'false');