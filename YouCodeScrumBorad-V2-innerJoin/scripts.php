<?php
    //INCLUDE DATABASE FILE
    include('database.php');
    //SESSSION IS A WAY TO STORE DATA TO BE USED ACROSS MULTIPLE PAGES
    session_start();


    //ROUTING
    if(isset($_POST['save']))        saveTask();
        
    if(isset($_POST['update']))      updateTask();
    if(isset($_POST['delete']))      deleteTask();
    

   
    function getTasks()
    {
        include('database.php');
        //CODE HERE
        //SQL SELECT
        $query = "                    SELECT tasks.id , statusField.status , tasks.title , typeField.type_name , priorityField.priority , 
                                      tasks.task_date, tasks.description, tasks.status_id, tasks.priority_id
                                      FROM tasks 
                                      INNER JOIN statusField ON tasks.status_id = statusField.id
                                      INNER JOIN priorityField ON tasks.priority_id = priorityField.id
                                      INNER JOIN typeField ON tasks.type_id = typeField.id";
        $result = mysqli_query($connexion,$query);
        $data = mysqli_fetch_all($result,MYSQLI_ASSOC);
        
        return $data;

    }

    function saveTask()
    {
        include('database.php');
        //CODE HERE
        //SQL INSERT
        $title=$_POST['task_title'];
        $type=($_POST['task-type'] == 'Feature') ? '1' : '2';
        $priority=$_POST['task_priority'];
        $status=$_POST['status_option'];
        $description=$_POST['task_description'];
        $date=$_POST['task_date'];
        
        $insert_query = "INSERT INTO `tasks` (`id`, `title`, `type_id`, `priority_id`, `status_id`, `task_date`, `description`) 
        VALUES (NULL, '${title}', '${type}', '${priority}', '${status}', '${date}', '${description}')";
       
        if(mysqli_query($connexion,$insert_query)){
            $_SESSION['message'] = "Task has been added successfully !";
            header('location: index.php');
        }
        
    }

    function updateTask()
    {
        include('database.php');
        $title=$_POST['task_title'];
        $type=$_POST['task-type'];
        $priority=$_POST['task_priority'];
        $status=$_POST['status_option'];
        $description=$_POST['task_description'];
        $date=$_POST['task_date'];
        //CODE HERE
        //SQL UPDATE
        $task_id = $_POST['task_id'];
        $update_query = "UPDATE `tasks` 
                         SET `title`= '$title', `status_id`='$status', `type_id` = '$type', `priority_id`='$priority',  
                             `task_date`='$date',`description`='$description' 
                         WHERE `tasks`.`id` = $task_id";

        if(mysqli_query($connexion,$update_query))
        {
            $_SESSION['message'] = "Task has been updated successfully !";
            header('location: index.php');   
        }
        
    }

    function deleteTask()
    {
        include('database.php');
        //CODE HERE
        //SQL DELETE
        $task_id = $_POST['task_id'];
        $delete_query = "DELETE FROM tasks WHERE `tasks`.`id` = $task_id";
        if(mysqli_query($connexion,$delete_query )){
            $_SESSION['message'] = "Task has been deleted successfully !";
		    header('location: index.php');      
        }
        
    }


?>

