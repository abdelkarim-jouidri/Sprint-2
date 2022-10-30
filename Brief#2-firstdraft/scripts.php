<?php
    //INCLUDE DATABASE FILE
    include('/xampp/htdocs/YouCodeScrumBorad-V2/database.php');
    //SESSSION IS A WAY TO STORE DATA TO BE USED ACROSS MULTIPLE PAGES
    session_start();

    // $_SESSION['message'] = "Task has been updated successfully !";

    //ROUTING
    if(isset($_POST['save']))       {
        // $_SESSION['message'] = "Task has been updated successfully !";

        saveTask();} 
        

    if(isset($_POST['update']))      updateTask();
    if(isset($_POST['delete']))      deleteTask();
    

   
    function getTasks()
    {
        include('database.php');
        //CODE HERE
        //SQL SELECT
         $result;
        $data = mysqli_fetch_all($result,MYSQLI_ASSOC);
        
        return $data;

        
    }

//    echo getTasks()['type_id'];

    function saveTask()
    {
        include('database.php');
        //CODE HERE
        //SQL INSERT
        // $_SESSION['message'] = "Task has been added successfully !";
		// header('location: index.php');
        $title=$_POST['task_title'];
        $type=$_POST['task_type'];
        $priority=$_POST['task_priority'];
        $status=$_POST['status_option'];
        $description=$_POST['task_description'];
        $type=$_POST['task-type'];
        $date=$_POST['task-date'];
        
        var_dump($date);

        $insert_query = "INSERT INTO `tasks` (`id`, `title`, `type`, `priority`, `status`, `task_date`, `description`) 
        VALUES (NULL, '${title}', '${type}', '${priority}', '${status}', '${date}', '${description}')";
        $_SESSION['message'] = "Task has been added successfully !";
        if(mysqli_query($connexion,$insert_query)) {
        $_SESSION['message'] = "Task has been added successfully !";

        header('location: index.php');
        }
        
    }

    function updateTask()
    {
        //CODE HERE
        //SQL UPDATE
        $_SESSION['message'] = "Task has been updated successfully !";
		header('location: index.php');
    }

    function deleteTask()
    {
        //CODE HERE
        //SQL DELETE
        $_SESSION['message'] = "Task has been deleted successfully !";
		header('location: index.php');
    }

?>

