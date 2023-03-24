# Grande - A Medium.com Clone

![Your Project Logo or Screenshot](https://your-project-image-url.com)

Grande is a fullstack web application inspired by Medium.com. It allows users to create an account, write and publish articles, and read and interact with content created by other users. The project is built using Ruby on Rails and PostgreSQL on the backend. You can visit the live site [here](https://grande-means-medium.herokuapp.com).

## 📖 Table of Contents

- [Technologies Used](#technologies-used)
- [Key Features](#key-features)
  - [User Authentication](#user-authentication)
  - [Article Creation and Editing](#article-creation-and-editing)
  - [Bookmarking](#bookmarking)
  - [Following Users](#following-users)
  - [User Profiles](#user-profiles)
- [Future Directions](#future-directions)

## 🛠️ Technologies Used

- Ruby on Rails
- PostgreSQL
- HTML/CSS

## 🔑 Key Features

### User Authentication

In Grande, the user authentication feature plays a crucial role in ensuring secure access to user accounts and personalized content. One of the primary challenges faced during the implementation of this feature was handling user session management while maintaining high levels of security. To address this, I employed a combination of server-side session storage with a secure, encrypted cookie-based system. This approach allowed us to maintain user sessions without exposing sensitive data to potential attackers.

Another challenge was validating and sanitizing user input during the registration and login process to prevent security vulnerabilities, such as SQL injection and cross-site scripting attacks. I tackled this issue by using Rails' built-in validation features and applying strict input validation checks. This step ensured that only properly formatted and safe data entered our system.

<!-- Finally, implementing a smooth user experience for password recovery proved to be another hurdle. To provide a seamless and secure password recovery process, we incorporated a token-based system. When a user requests a password reset, the application generates a unique, time-limited token and sends it to the user's registered email address. The user can then follow the link provided in the email to reset their password. This approach not only offers an intuitive user experience but also adds an extra layer of security by requiring access to the user's email account to initiate the password reset. -->

```ruby
# Code snippet showcasing an interesting part of the user authentication implementation
```

### Article Creation and Editing

In Grande, the Article Creation and Editing feature is a core functionality that I developed to allow users to draft, edit, and publish articles within the platform. This feature aims to provide a seamless and user-friendly experience for content creation while maintaining a high level of flexibility for various formatting and styling options. One of the primary challenges I faced during the implementation of this feature was the integration of a rich text editor to facilitate easy content manipulation, including text formatting, image uploading, and embedding multimedia content.

To address this challenge, I incorporated a robust and flexible rich text editor into the frontend of the application. This decision enabled me to provide a comprehensive and customizable editing experience for users while maintaining compatibility with the overall architecture of the project.

Another challenge I faced was managing access control and permissions for articles. I needed to ensure that only the article's author could edit or delete their content while allowing other users to view and interact with it. To accomplish this, I implemented a role-based access control system on the backend using Rails. This system verifies user permissions and restricts access to editing functionalities based on the user's role and association with the content, ensuring a secure and controlled environment for content creation and management.

With these solutions in place, the Article Creation and Editing feature in Grande offers users an intuitive and powerful tool for crafting and sharing their written work while maintaining a high level of security and control.

### Bookmarking

In Grande, I developed a User-Specific Content Bookmarking system that allows users to save and organize their favorite articles within the platform. This feature makes it easy for users to access and revisit the content they find interesting.

A main challenge I faced was designing an efficient and user-friendly interface for managing bookmarks. I created a dedicated bookmark management section within the user's profile, making it simple for users to manage their saved articles.

Another challenge was ensuring that the bookmarking feature was scalable and performant as the platform grew. I used caching mechanisms and optimized database queries to keep server response times low and reduce backend load.

Maintaining data consistency and integrity was also important. I implemented error-handling mechanisms to catch and resolve any potential inconsistencies, ensuring the reliability of the bookmarking system.

### Following Users 

In Grande, I implemented a user-following feature that enables users to connect with other users and stay updated on their latest posts. This social aspect enhances the user experience by allowing them to discover and engage with content from their favorite authors or fellow users within the platform.

The user-following feature is designed to be simple and intuitive. Users can easily follow or unfollow other users by clicking a "Follow" button on the user's profile page. Once a user follows another user, the posts from the followed user will appear on the follower's "Following" page. This dedicated page serves as a personalized feed, displaying the latest content from the users they follow, making it easy for users to stay informed and engaged with their favorite authors.

The implementation of this feature involved managing relationships between users and ensuring efficient data retrieval for the "Following" page. To accomplish this, I utilized a database schema that efficiently stores and retrieves user-following relationships. This schema allowed for quick and responsive updates to the user's "Following" page as they follow or unfollow other users.

Overall, the user-following feature on Grande plays a crucial role in fostering user engagement and community interaction within the platform. By allowing users to follow other users and curate their "Following" page, they can tailor their content experience and stay connected with the authors and topics that interest them the most.
### User Profiles
In Grande, I developed a user profile feature that provides users with a personalized space to showcase their identity and express themselves within the platform. This feature allows users to upload a profile photo, choose a display name, and write a brief bio about themselves. The user profile feature not only enhances user engagement but also fosters a sense of community by giving users a recognizable identity within the platform.

The profile photo, display name, and bio are prominently displayed on the user's profile page, allowing other users to get to know the author better. Additionally, the profile photo and display name appear alongside the user's articles on article pages and in the list of articles, providing a consistent visual representation of the author throughout the platform. This helps users quickly identify articles by their favorite authors and fosters a sense of familiarity and connection with the content creators.

Implementing the profile feature involved handling user-uploaded images, storing and retrieving user profile data efficiently, and ensuring a responsive and intuitive user interface for managing profile information. I implemented a secure and efficient method for uploading and storing profile photos, while also providing automatic resizing and optimization to ensure consistent and fast-loading images throughout the platform. For the display name and bio, I utilized a database schema designed to store and retrieve this information quickly and efficiently.

In summary, the user profile feature in Grande enhances the overall user experience by providing a personalized space for users to showcase their identity and express themselves. By enabling users to upload a profile photo, choose a display name, and write a bio, Grande fosters a sense of community and encourages user engagement and interaction within the platform.

## 🚀 Future Directions

In future versions of Grande, I plan to enhance the user experience and engagement by introducing several new features:

- **Comments section**: Allowing users to discuss and share their thoughts on articles, fostering interaction among readers and authors.
- **Tagging system**: Making it easier for users to discover and navigate content based on specific topics or interests.
- **Trending topics**: Highlighting popular and relevant content to users, promoting discovery and engagement.
- **Voting system**: Enabling users to express their appreciation for articles and providing authors with valuable feedback.
- **Monetization options**: Exploring subscriptions, paywalls, or revenue-sharing, allowing authors to earn from their contributions to Grande.

These future features aim to create a more interactive, dynamic, and rewarding environment for both readers and authors on the platform.
