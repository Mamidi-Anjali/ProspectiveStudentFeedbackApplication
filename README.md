Full-Stack Web Application Development Project:

Developed a Full-Stack Web Application: Implemented a comprehensive survey form application using Angular for the frontend and Spring Boot with JPA for the backend, providing a seamless user experience for prospective students to submit and view campus visit feedback.

Integrated RESTful Web Services: Utilized RESTful APIs to handle form submissions and data retrieval, ensuring efficient and secure communication between the frontend and backend.

Database Management with JPA: Employed JPA for database interactions, enabling the efficient storage and retrieval of survey data with a robust and scalable ORM solution.

Enhanced User Interaction: Created an intuitive interface with required fields, checkboxes, radio buttons, dropdowns, and text areas, ensuring comprehensive feedback collection and acknowledgment upon form submission.
Tools and Technologies Used:

Frontend: Angular, HTML, CSS, Bootstrap for styling
Backend: Spring Boot
Database Interaction: JPA (Java Persistence API)
Web Services: RESTful APIs
Languages: TypeScript, Java
Development Tools: Visual Studio Code, IntelliJ IDEA
Build Tools: Maven
Version Control: Git
Database: MySQL

Steps to Replicate or Run the Angular Application (FRONTEND) -
Clone or Download the Angular Project: If you have the project in a Git repository, clone it using Git. Otherwise, download the project files.

1. Install Node.js and npm: Make sure Node.js and npm are installed. You can verify their installation by running:
node -v
npm -v.

2. Install Angular CLI: Install Angular CLI globally if you haven't already.
npm install -g @angular/cli.

3. Navigate to Your Project Directory: Open a terminal or command prompt and navigate to the root directory of your Angular project. Or go to the project folder and select open with VS Code.

4. Install Project Dependencies: Run the following command to install the project dependencies defined in package.json:
npm install.

5. Run the Application: Start the development server by running:
 npm start.

6. Access the Application: Open your web browser and navigate to http://localhost:4200. Your Angular application should be running and accessible.

Steps to Replicate or Run the SpringBoot Application (BACKEND) -
Clone or Download the Spring Boot Project: If you have the project in a Git repository, clone it using Git. Otherwise, download the project files.

1. Set Up Your Development Environment: Ensure you have Java Development Kit (JDK) installed on your system. You can download it from the Oracle website or use OpenJDK.

2. Import the Project into Your IDE: Import the Spring Boot project into your favorite IDE (e.g., IntelliJ IDEA, Eclipse).
   
3. Build and Run the Spring Boot Application: You can run your Spring Boot application from your IDE - by going to Pa3Application.java file and click on run or using the command line. Also, as we are using Maven, you can run your application with the following command:
mvn spring-boot:run

4. Access Your Application: Once your application is running, Test the frontend of the application and add a new feedback and also access the existing surveys. Or To test the backend alone, You can access it in a web browser or using tools like Postman for API testing. The default URL for a Spring Boot application is typically http://localhost:8080(or a different port if configured).

5. Optional: Configure Your Application: : Modify the application's properties files (application.properties) to configure the application as needed, such as configuring the database connection or setting up security.(database url, username, password)
