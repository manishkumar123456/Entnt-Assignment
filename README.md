# React Calendar Application

This project is a **React-based Calendar Application** designed to track and manage communication with companies. It features separate modules for **Admin** and **User**, along with a reporting module for generating insights. The application incorporates modern design principles and a responsive user interface.

---

## Description

This application allows users to track and manage communication with companies. It provides features for managing companies, setting communication preferences, and generating reports to track communication trends.

## Live Demo

You can view a live demo of the application at [https://entnt-assignment-manish-kumar.netlify.app/](https://entnt-assignment-manish-kumar.netlify.app/).


## Features

### Admin Module
- Add, update, and delete companies.
- Configure communication methods and periodicity.
- Edit company details (name and communication preferences).
- Manage a centralized list of companies.

### User Module
- Dashboard to view communications and schedules.
- Log communication details (type, date, notes).
- View overdue and upcoming communications.
- Calendar view for tracking communication history.



### Login and Registration
- Secure user authentication using JSON Web Tokens (JWT).
- User registration for creating new accounts.

### Responsive Design
- Optimized for various screen sizes and devices.

### clickable button
- Clickable buttons for easy navigation.
- Navigatin from user dashboard to anlytical dashboard
- Navigatin from anlytical dashboard to user dashboard
- Navigatin from admin dashboard to analytical dashboard

### Mobile Responsive
- Fully responsive design for optimal viewing on mobile devices.


### Dark Mode and Light Mode
- Toggle between dark and light modes for a personalized experience.

---

### Backend 

## Installation





### Frontend
## Installation

1. Download the zip or clone it :
```bash
git clone https://github.com/manishkumar123456/Entnt-Assignment.git
cd entnt-frontend
```

2. Install dependencies:
```bash
npm install
```

2. Run the project:
```bash
npm run dev
```

## Dependencies

The application requires the following npm packages:

- React (`react`, `react-dom`)
- React Router DOM (`react-router-dom`)
- Material-UI (`@emotion/react`, `@emotion/styled`, `@mui/icons-material`, `@mui/material`, `@mui/x-data-grid`)
- Axios (`axios`)
- Day.js (`dayjs`)
- React Tooltip (`react-tooltip`)

Install them using:
```bash
npm install react react-dom react-router-dom chart.js react-chartjs-2
```

---

## Hosting info

- Backend host on render : ``` https://www.render.com```

- Frontend host on netlify : ```https://www.netlify.com/```


## File Structure

### entnt-frontend/
```
entnt-frontend/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
|   ├── components/
        |── AdminDashboard.jsx
│   │   ├── CommunicationCalendar.jsx
        |── CommunicationManagement.jsx
│   │   ├── CommunicationModal.jsx
│   │   ├── CompanyManagement.jsx
│   │   ├── Login.jsx
│   │   ├── ProtectedRoutes.jsx
│   │   ├── Register.jsx
│   │   └── ThemeToggle.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── pages/
│   │   ├── AdminDashboard.jsx
|   │   ├── AnalyticsDashboard.jsx
│   │   └── UserDashboard.jsx
│   ├── App.jsx
│   ├── index.css
│   └── index.jsx
├── package.json
├── package-lock.json
└── README.md
```

```

---

## How to Use

1. **Admin Module**:
   - Add and configure companies via the Admin dashboard.
   - Edit company details as needed.

2. **User Module**:
   - Log communication details and view them on the dashboard.
   - Use the calendar to track communication history.

3. **Reporting Module**:
   - View charts and insights to understand communication patterns.


## LIVE DEMO Pictures
Link to the live demo: [https://entnt-assignment-manish-kumar.netlify.app/](https://entnt-assignment-manish-kumar.netlify.app/)

#### Desktop View
![alt text](<Screenshot (71).png>)
![alt text](<Screenshot (72).png>)
![alt text](<Screenshot (69).png>)
![alt text](<Screenshot (70).png>)