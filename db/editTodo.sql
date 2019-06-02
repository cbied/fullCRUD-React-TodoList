UPDATE todo SET
description = $2,
completed = $3
WHERE todo_id = $1;