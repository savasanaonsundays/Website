# Website

Online version can be found here: https://savasana-on-sundays.herokuapp.com/

# 1. Client

## Savasana on Sundays

The client is a business called ‘Savasana on Sundays’, owned by Anita Wong, a freelance yoga teacher who offers massage sessions, private yoga classes and public yoga classes as a part of her business.

# 2. Client's need

The client’s needs are as followed:

- Display of yoga class times and locations
- Display for massage session availability times and locations
- The functionality to book a massage session or private yoga class from a range of available time slots which will then render that appointment time unavailable.
- Ability to confirm which clients to take on
- Take payment for the booked sessions
- Injury form and other documentation
- Widgets for social media (medium, facebook, maybe instagram)
- Rating system
- Testimonials
- Google maps feature for locations of studios

- Increase online presence
- Dashboard to edit content
- Attractive functional website
- There is a link to a product website - it would be better if it was streamlined
- Subscription email sign-up
- Contact Form
- User Demographics

The main business problem is to have a functioning website which is able to take bookings whilst showing availabilities and retrieving customer information in order to further understand the customer’s needs.

# 3. Client's Current Data & Setup

The client’s current setup is a simple static website hosted by squarespace, the data that this current setup holds displays content of description of her business, times of class’s, contact information and a few images in relation to the business.

# 4. The Project

The goal of this project is to create a website which will include all the required and relevant information about the business in order to address the business problem of which is to keep the user/visitor on the website without being directed to other websites for information as all the information will be present on the client’s website. Most of the information content will be accessible for the client to edit when there may be changes to the business information. The project will also implement a booking feature which will take on bookings for yoga or massage sessions. The booking feature will be in a display of a calendar which will display all available dates and times with those dates. After confirmation of bookings the website will also use a payment feature to take payments from customers. The website will also present a form during the booking process in order to take customer information to pass along to the business. These key features will meet the client’s needs and solve the business problem of taking on bookings with the calendar booking system. The ability to take on certain clients for certain sessions will be solved with form collection presented during the booking process.

# 5. The Software

The project will be made using a combination of several different technologies, the stack combination that this app will mostly revolve around will be the MERN stack.

MERN stack

- MongoDB
- Express
- React
- Node.js
- HTML
- CSS

### MongoDB

MongoDB is an open-source document database - used for back-end application to store data as JSON(JavaScript Object Notation) documents in collections. MongoDB can modify the schema without downtime and without changing of the application

### Express

A framework that runs the back-end JavaScript application. The framework can simplify writing code for the server. Runs as a module within the Node.js environment. The framework handles the routes which requests to the correct areas of the application. Gives a REST API using HTTP calls for the front-end to access the database. Express parses request URL, headers, and parameters . Response side has setting response codes, setting cookies, sending custom headers.

### React

React is not a full-fledged MVC framework, it is a JS library used to create interfaces. React is an open source JavaScript library developed by Facebook. This library uses components for the front-end application, where each component holds state, parent and also has the ability to pass state down to children components where they can pass changes back to the parent with the use of callback functions. These components are reusable and can contain its own internal logic. This software makes the code more easier to read and easier to maintain develop the codebase. As the react mostly works on the views which are declarative, there is no concern about managing the changes in the view’s state or data. Building these components which contain its own state and renders itself will be useful for when it comes to placing the components together to make another component that depicts a complete view or page.
These Components talk to each other by sharing state information in the form of read-only properties to their child components and by call backs to their parent components. Another positive of React is the fact that it can be run on the server side, so the code is able to run on both server and browser.

### Node.js

Node.js is JavaScript outside of a browser which runs the back-end application through Express. Based on Google’s V8 JS engine. Uses own module system to put together multiple JS files. These modules are like libraries. Can include the functionality of another JS file. Great amount of third party open-source libraries available for easy installation.

### HTML

Standard markup language to help create the web application, stands for Hypertext Markup Language.

### CSS

Cascading Style Sheets is a language used to separate the design and presentation from the content. This style sheet describes how HTML elements are shown on the application.

# 6. Network Setup

The Network setup for this project will be using the software described previously.
React will be used for the front end, client-side with Node.js running the server-side. The application will be using MLab as a service for MongoDB. Mlab is connected to a MONGODB_URI. All the routes will be handled with Express and/or React Router.

# 7. Infrastructure (hardware)

The web application being produced in this project will not require any hardware as the web application will be hosted remotely.
The process of the web applications infrastructure will be as followed:
Development workflow
Source Control
Building
Continuous changes/updates from reviews
Deployment & Testing
Monitoring

# 8. Architecture

### Back-End

Our back-end will be comprised of a Mongo database hosted on Mlab which will be interfaced with Mongoose on the server side which will allow for access and data to be validated easily. From this point Express will allow us to make our API easily accessible by our React front end via the endpoints we declare via Express.

### Front-End

Our front end will be comprised of React and React-Router which will provide us the Views or V in our MVC application. React will allow us to render our content which we will pass in through our back-end API to the database which in turn allows us to give full control to the client(Anita)to update and change the content at will via the administration portal page which will send update requests to the database allowing for the contents of her website to be changed at will without the need for a developer to do so which will greatly decrease the amount of maintenance required.

Our application will have a microservice based architecture which will improve the overall integrity of the application and allow for our application to be tweaked and altered easily thus minimizing downtime and bugs that could potentially cause the website to crash entirely.

# 9. High-level components

Our application will have a microservice based architecture which will improve the overall integrity of the application and allow for our application to be tweaked and altered easily thus minimizing downtime and bugs that could potentially cause the website to crash entirely.

By abstracting the bulk of the code and leaving behind clear functionality allows our code to be readable and easily tweaked.

Within our back end we have ensured that every component is abstracted from the main files(e.g Server.js) of our application and are required(imported instead)instead as well on the front end we have abstracted all the components which we can possibly render throughout the website meaning that we can easily pick and choose when to render those components.

Examples of components:
NavBar
SpringBoard
BottomNav
SubmissionForm (reliant on the back end API (routing, database components ect))
Content (Also reliant on the back end API( routing, database components ect))
Login (reliant on API the back end ( routing, database components ect))
Dashboard ((reliant on the back end API ( routing, database components ect))

# 10. Third party services

### AWS / S3

Amazon Web Services S3 is built to store and retrieve data. Stands for Simple Storage Service, It uses sophisticated integration with AWS CloudTrail which logs, monitors and retain storage API. S3 supports security standards and compliance certifications

### Heroku

Heroku is a cloud platform that will be used for the deployment of the web application. Heroku runs the web application inside smart containers on a managed runtime environment.

### Stripe

A software platform that helps run business’ online. Stripe handles transactions for these business using an API, and securely storing customer payment details.

### Trello

Trello will be used in order to help the Team stay on task. Trello is a platform where a board display is available which can be filled out with cards, helps organise projects.

### Passport

Passport.js is a authentication middleware. We are using it to create protected routes which only admin who provide a JST token can access.

### Bcrypt

Bcrypt is a password hashing function designed based on the Blowfish cipher. When the user registers a salt of ten extra characters is added to their password. This combination is then hashed and the result is what is stored on the database. When we want to compare a login password to the saved password we use bcrypt to make the comparison.

### Json Web Tokens

JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. In our app we are using JSON Web Tokens for authorisation. Once the Admin user is logged in, each subsequent request will include the JWT, allowing the Admin user to access the content altering and patient form routes, which are permitted with that token. In this application JWTs are signed using a secret (with the HMAC algorithm).

### Validator

Validator is a npm package used to check the validity or syntactical correctness of a fragment of code or document. In our app we are using validator to check if user input is valid. For example that it is not empty, correct emails are provided and answers consist of correct characters and the correct length of characters if specified.

# 11. Database justification

### MongoDB

The database that will be used for this project will be MongoDB.
MongoDB is a NoSQL document oriented database which is suited for web application that have large amounts of interactivity built into the front-end.

The MongoDB language is used in order to implement a storage of data which will have high performance, availability and automatic scaling.
Because MongoDB uses JSON.

MongoDB
ACID Transactions
Collection
Document
Field
Secondary Index
Embedded documents, $lookup & $graphLookup
Aggregation Pipeline

### Justification

The pros and cons for the use of MongoDB are as follows:

### Pros

Document oriented
High performance
High availability — Replication
High scalability – Sharding
Dynamic — No rigid schema.
Flexible – field addition/deletion have less or no impact on the application
Heterogeneous Data - data structure that can contain various data of different data types like integer, float and character
No Joins
Distributed
Data Representation in JSON or BSON
Document-based query language that’s nearly as powerful as SQL
Cloud distributions such as AWS, Microsoft, RedHat,dotCloud and SoftLayer etc:-. In fact, MongoDB is built for the cloud. Its native scale-out architecture, enabled by ‘sharding,’ aligns well with the horizontal scaling and agility afforded by cloud computing.
Good for Blogs and content management.
Real-time analytics and high-speed logging, caching, and high scalability.
Configuration management.
Maintaining location-based data — Geospatial data.
Mobile and social networking sites.
Evolving data requirements.
Loosely coupled objectives — the design may change by over time.

### Cons

A downside of NoSQL is that most solutions are not as strongly ACID-compliant (Atomic, Consistency, Isolation, Durability) as the more well-established RDBMS systems.
Complex transaction
No function or stored procedure exists where you can bind the logic
Highly transactional systems or where the data model is designed up front.
Tightly coupled systems

# 12. Database relations implementation

As per the ERD our database structure requires that no collection is directly connected to the other as the data that is retrieved from the customer is done on once off basis meaning no account is required in order to make a booking. While there are user accounts in the form of an “admin” these accounts do not require any identifying field or join tables to relate them to the content as no new content gets created and thus does not need to be accredited to a specific user.
Should a “blog” style component be added to the website an identifying field for user and blog post would be required however this is not within our mission statement.

# 13. Database schema design

This is the ERD of the MVP for the web application which can be viewed here:

<img src="ERD.png">
# 14. User Stories

https://trello.com/b/hJ5rIcYc/user-stories

<img src="user-stories.png">

## Detailed User Stories

Users should be able to book a massage session

feature: booking

- user selects massage
- user looks through time availabilities
- user selects preferred time
- user fills out form

scenario: user books a massage session

- given i’m a user
- when i visit the site i can view massage information
- i select massage and can now browse through availability
- i can select an open time for massage
- i fill out a screening form
- input email or other details
- and book and receive confirmation

Users should be able to locate class time and location information

feature: timetable information section

- user lands on landing page
- user selects class timetable
- user can view classes at the different studios
- studio information, pricing, and location is all displayed
- contact info on either the business owner or studio owner should be available

scenario: user knows of the website and wishes to attend a class

- given that i know of the business and want more information on studio times
- i land on the landing page
- click on the class timetable section
- get information on the studio or class that best suits me
- able to have access to contact info readily available

Users should have access to information about the practice

Feature: about the Practice

- User wants to learn about the instructor and yoga
- User clicks on about me

Scenario:

- Given that I am a user and I click on about me in the landing page
- I will see information about Anita and her mission statement
- If click back to the landing page
- I can then click Yoga which will give me information about her style of yoga

Users should have access to other platforms that the business promotes on

Feature: Footer which connects to the business’ Social Media and Contact information

- User lands on landing page
- User locates contact information immediately without too much effort
- User also can also locate contact and social media information after browsing the website located in the footer
- As a user I would like to find other websites and social media which Anita in connected to So that I can connect and see Anita’s interests

Senario:

- Given that I am a user
- After I enter the website landing page
- I am able to locate contact information straight away
- At the end of browsing every page there should be at the footer icons which will lead to social media links and also direct contact information
- clicking on the facebook link at the bottom of the page should open a new tab leading to either social media websites or display further contact information

Users should be able to make payments of massage or private yoga sessions

Feature: Stripe system that takes credit details and take payments which will in return also send a receipt via email

- User completes booking
- Depending on booking and whether the booking has been confirmed
- User is then given direction to fill out credit card details to complete payment
- User then gets directed to a page displaying the process is complete and redirected back to a page displaying confirmation

Scenario:

- Given I’m a user booking a session
- I am able to complete booking a session with confirmation to pay
- I am able to input my credit card details
- I then get redirected to a page confirming that everything has been completed
- I then receive email notification of the payment and a receipt

# 15. Wireframes

Landing Page:
https://www.figma.com/file/YUieU3yq2O2LJKTUoiOa3mpX/Untitled

<img src="wireframes-10.png">
<img src="wireframes-20.png">

Private Booking, Class Timetable, About us, Blog Pages:
https://www.figma.com/file/YUieU3yq2O2LJKTUoiOa3mpX/Untitled?node-id=1%3A3
<img src="wireframes-12.png">

Pricing:
https://www.figma.com/file/YUieU3yq2O2LJKTUoiOa3mpX/Untitled?node-id=2%3A1
<img src="wireframes-11.png">

Admin Dashboard:
https://www.figma.com/file/YUieU3yq2O2LJKTUoiOa3mpX/Untitled?node-id=99%3A109
<img src="wireframes-23.png">

## Design Process

### Business Problem

Going off from the client’s initial setup, we’ve decided to make a lot of changes in the way a user would navigate through a site, making it easier with clickable image links (cards), reducing the scroll amount by limiting the landing page to two sections:
A landing page image
The Cards available to direct through the site
We’ve allowed the navigation bar to hold the most necessary links to direct around the website. Aiming to solve the business problems informed by the client. Following the style guide of the client’s business ideals, the chosen colour scheme which is a warm reflection of nature was used in order to reflect the business’ ideology of the client’s yoga style.

# 16. Allocations of Tasks

https://trello.com/b/DNKNk0Uk/savasana-on-sundays

### Trello

<img src="trello.png">

The tasks are being allocated using an online tool ‘Trello’. The main columns are sorted into 4 sections labelled ‘Learning Tasks’, To Do, Doing and Done. There is a 5th column labelled ‘Canned’ where the features or tasks that are deemed unnecessary are placed. They are not deleted in order to keep track of the flow of what is happening. Tasks are also being allocated in regular group meetings in order to make sure everyone knows what they are doing and what they have done. The tasks allocated to each member is going off on the strengths of each members skills but in order to make sure every member has a learning opportunity to gain from each task, there will be task talks explaining and teaching what is happening at the regular group meetings.

Everyone must discuss what they are doing or up to and share resources in slack. Members must also pay attention to the physical trello board and move tasks that are completed

Each of the tasks nested under these four columns have labels in different colours in order to categorise the level of urgency of each task and where the stage of the task is at. These labels include: ‘incomplete’ in red to show urgency, ‘imperative’ in blue to show level of importance, ‘in progress’ in yellow to show that the task is being handled and ‘completed’ in green to show a task has now been finished. These colours help the members see instantly what needs to be done as the colours stand out. The tasks in the trello board also have set ‘due dates’ in order to help members understand when tasks are due. The main important feature of the trello board tasks is the allocation process which is done using a ‘choose member tool’ which displays the initials of a members name in order to show who is doing what. Members need only to look for their initials and do the task at hand.

# 17. Agile

<img src="10-schema.png">

Higher Level App Architecture 5/7/18

<img src="20-schedule.png">

Timetable of major team due dates and initial smaller tasks 5/7/18

<img src="30-basic_wireframes.png">

Planning wireframes and appflow 5/7/18

Project Planning Early Stages(three pics)
Team went through the project architecture, appflow and wireframes vaguely in a discussione with the whiteboard. Early tasks were divided amongst team members and a calendar with internal due dates was made so that we can keep track of the time left for major tasks.

### Agile

The team discussed the key components of agile. Outlining that Agile is a set of values and principles which could be used to make decisions about how to do the work of how to develop the software.
Some key agile methodologies and how our group is using them:

1.  Our highest priority is to satisfy the customer through early and continuous delivery of valuable software.
    -We will be talking with our client Savasana on Sundays continuously and regularly through the process with online video calls and meetups every few days when required in order to update the state of her product.

2.  Welcome changing environments, even late in development. Agile processes harness change for the customers competitive advantage.
    -We have discussed that our group talks are a place where we can reevaluate our direction and short term steps if necessary and have planned meetings in the morning and afternoon so that we can make sure we are taking the optimum path. Any changes required by the client is welcomed if we are able to within the given timeframe.

3.  Deliver working software frequently, from a couple of weeks to a couple of months, with a preference to the shorter time scale.
    -We have broken the app into smaller parts with deadlines so that we are delivering new functionality frequently every few days as the task is to be completed within 3 weeks.

4.  Business people and developers must work together daily throughout the project.
    As we are in constant contact with the client daily, we are able to communicate and update the changes and problems that are overcome throughout the development of the project. We are able to discuss as a group what an be done and implemented in what way with our planning the design and architecture and give the proposed idea to the client who in turn gives further feedback to work on.

5.  Build projects around motivated individuals. Give them the environment and support they need and trust them to get the job done.
    -The broken up tasks are assigned to group members so that they can work autonomously. Giving tasks which rely on each others work creates the environment that we have placed trust in each other to get the job done. The necessary group discussions offer a chance to discuss where each member is facing a problem in order to help the member reach out and create an environment that further supports each team member to help out.

6.  The most efficient method of conveying information to and within a development team is face-to-face conversation.
    -The team has at least two discussions per day: one in the morning and one in the afternoon. The ground rules that have been agreed upon is to to arrive in the workplace (Coder Academy classroom) at 10AM everyday and stay till the minimum of at least 5PM. With this agreement the team members will be able to hold face-to-face conversations when needed or wanted. This is crucial in order to support every team member and help others understand the current work as being physical present allows the communication to reach its full potential.

Overall the team is meeting at regular intervals in order to make sure the software is working and agree to team decisions made from reviewing what changes with the project. With the regular group discussions we are able to ensure a constant pace in our working progress.

### Schedule

Basic schedule of important tasks/appointments
<img src="schedule.png">

### Regular client interaction

<img src="client-interaction.png">

### Client sign off

<img src="client-sign-off.png">

# 18. Source Control Process

Our source control process will follow these 13 steps.

1.  - Git pull upstream development
    - npm install

2.  git branch -d (name of branch)

3.  Git checkout -b ( fb/(feature name) )

4.  Work!

5.  Git add .

6.  Git commit -m “comment"

7.  Git checkout development

8.  Git pull upstream development

9.  Git merge (feature branch name)

10. Checkout / Fix conflicts

11. Git push origin development

12. Make pull request on Github

13. Someone Approve.

These steps will ensure that our process will have no conflicts. Because we will be working mostly in the same vicinity we will be able to determine if there are any updates to the code in person. At the beginning of each day we will begin with step 1.
Step 2 will only be used on feature branches that have been finished, step 3. Will be used when working on a new feature branch. After finish work on a feature branch we do step 5 through to 9. On step 10 we will check and fix any arising conflicts. If there are none we do step 11. Before we do step 12 we make sure to alert other team members we are about to do step 12. In order to avoid conflicts. And go on to step 13 and then repeat the cycle all over. Allowing members to also pull from the recent changes.

<img src="source-control.png">

# 19. Testing Process

Testing for:

- to see if the booking npm package works
- Routes are protected
- Admin has log in
- Admin can change content
- if mongo is receiving data
- stripe takes payment
- JWT

# 20. Information System Security Requirements

As the application will be handling personal health information, our system is required to protect it from misuse, interference, loss, and from unauthorised access, modification or disclosure. The information will be entered into a form which will only be accessible via a protected routed which only an admin user can access. The login process will need to be secure and the password will need to be stored in an encrypted format. We also require a secure system to take client payments for private yoga classes.

<img src="client-sign-off.png">

# 21. Information & Data Protection

We are using third party packages that specialise in the tasks required for securing the websites information and data. For our admin user the password they choose will be supplemented by a 10 digit salt and then encrypted. The node package bcrypt will facilitate this process as well as allowing the stored encrypted password to be checked against the password the admin uses to login. We will also be using JSON Web Tokens which will generate a token when the admin user logs in. This token will be stored in the the browsers local storage and then the npm package Passport will authenticate the token and allow the user to access the admin routes.

Payments will be made using Stripe APIs so that the website will not hold the client payment information at any point. Instead, Stripe will store the clients card information in a vault and provide a token that will substitute it. When required, Stripe will connect with the bank network and send authorise and capture requests which validate details and funds, then get the bank to make the transfer. In this way our app will be PCI compliant meaning that it will be following banking industry regulations.

# 22. Data Legal Obligations

Section 6 of the Privacy Act defines ‘personal information’ as ‘information or an opinion about an identified individual, or an individual who is reasonably identifiable.[15] This might include a person's name and address, medical records, bank account details, photos, videos and even information about what an individual likes, their opinions and where they work.
An important subset of personal information in the Privacy Act is ‘sensitive information.’ Sensitive information is defined in the glossary, and includes health information.[16] The Privacy Act generally affords a higher level of privacy protection to sensitive information than to other personal information.

As information required by the Website is ‘sensitive information’ there are a range of legal obligations associated. Below are a list of relevant excerpts from ‘Guide to securing personal information’ (the Privacy Act 1988 (Cth) (Privacy Act)) and relevant steps taken in our application to address the cited concern;

1.Authentication… is often managed by providing one of three factors— something one knows (such as a password or code), something one has (a physical token, such as a bank card, security pass, or a mobile phone to receive SMS confirmation), or something one is (biometric information such as a fingerprint).

-The website handles authentication using third party services. Bcrypt is used to encrypt the password and compare and match this password when required. JWTs and Passport are used to create and provide authorized users access to protected routes.

2.Encryption is important in many circumstances to ensure that information is stored in a form that cannot be easily understood by unauthorised individuals or entities

-Passwords are stored in our database in an encrypted format.

3.  Email is not a secure form of communication and you should develop procedures to manage the transmission of personal information via email.

-Emails are limited to the use of confirmations of purchase. No sensitive information is relayed via email.

<img src="client-sign-off.png">
