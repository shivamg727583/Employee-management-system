
   const  employees = [
      {
        "id": 1,
        "name": "Alice Johnson",
        "email": "alice.johnson@example.com",
        "password": "123",
        "tasks": [
          {
            "title": "Complete Sales Report",
            "category": "Work",
            "date": "2024-10-18",
            "description": "Prepare the monthly sales report for Q3.",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "title": "Team Meeting",
            "category": "Work",
            "date": "2024-10-19",
            "description": "Attend the weekly team meeting to discuss project progress.",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "title": "Yoga Class",
            "category": "Personal",
            "date": "2024-10-20",
            "description": "Attend the evening yoga class for relaxation.",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          }
        ]
      },
      {
        "id": 2,
        "name": "Bob Smith",
        "email": "bob.smith@example.com",
        "password": "123",
        "tasks": [
          {
            "title": "Fix Bug #1234",
            "category": "Work",
            "date": "2024-10-17",
            "description": "Resolve the critical bug in the payment system.",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          },
          {
            "title": "Client Presentation",
            "category": "Work",
            "date": "2024-10-22",
            "description": "Present the new project proposal to the client.",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "title": "Grocery Shopping",
            "category": "Personal",
            "date": "2024-10-21",
            "description": "Buy groceries for the week.",
            "active": false,
            "newTask": false,
            "completed": false,
            "failed": true
          },
          {
            "title": "Team Feedback",
            "category": "Work",
            "date": "2024-10-20",
            "description": "Provide feedback to the development team.",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          }
        ]
      },
      {
        "id": 3,
        "name": "Charlie Brown",
        "email": "charlie.brown@example.com",
        "password": "123",
        "tasks": [
          {
            "title": "Project Kickoff",
            "category": "Work",
            "date": "2024-10-15",
            "description": "Start the new project and distribute tasks.",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          },
          {
            "title": "Doctor's Appointment",
            "category": "Personal",
            "date": "2024-10-20",
            "description": "Attend the annual check-up with the doctor.",
            "active": false,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "title": "Code Review",
            "category": "Work",
            "date": "2024-10-19",
            "description": "Review the code for the new feature implementation.",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          }
        ]
      },
      {
        "id": 4,
        "name": "Diana Evans",
        "email": "diana.evans@example.com",
        "password": "123",
        "tasks": [
          {
            "title": "Marketing Campaign",
            "category": "Work",
            "date": "2024-10-25",
            "description": "Plan and launch the social media marketing campaign.",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "title": "Fitness Training",
            "category": "Personal",
            "date": "2024-10-21",
            "description": "Complete the daily workout routine at the gym.",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "title": "Team Lunch",
            "category": "Work",
            "date": "2024-10-19",
            "description": "Attend the team lunch to celebrate project completion.",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          }
        ]
      },
      {
        "id": 5,
        "name": "Ethan Davis",
        "email": "ethan.davis@example.com",
        "password": "123",
        "tasks": [
          {
            "title": "Design Mockups",
            "category": "Work",
            "date": "2024-10-18",
            "description": "Create design mockups for the new landing page.",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "title": "Call with Client",
            "category": "Work",
            "date": "2024-10-20",
            "description": "Discuss project requirements with the client over a call.",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "title": "Birthday Party",
            "category": "Personal",
            "date": "2024-10-23",
            "description": "Attend a friend’s birthday party in the evening.",
            "active": false,
            "newTask": false,
            "completed": false,
            "failed": true
          }
        ]
      }
    ]

   const admin = [{
      "id": 1001,
      "name": "Admin User",
      "email": "admin@gmail.com",
      "password": "123",
     
      
    }
  ]
  
  export const setLocalStorage =()=>{
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));

  }
  export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));
    return {employees, admin};
  }