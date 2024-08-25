# Zupay Task Blog Application Documentation

## Overview

The Zupay Task Blog Application allows users to browse, view, create, edit, and delete blog posts. The application is accessible via any modern web browser.

## Accessing the Application

**URL**: Visit the application by navigating to [https://zupay-task-blog-1.onrender.com](https://zupay-task-blog-1.onrender.com) in your web browser.

## Homepage: Viewing Blog List

- **Blog List**: Upon visiting the site, you'll be presented with a list of blogs. Each blog entry shows a brief snippet or title.
- **Viewing a Blog**: Click on the title of any blog from the list to view its full content.

## Blog Details Page

- **Full Blog View**: Once you click on a blog from the list, you'll be taken to a page displaying the full content of the selected blog.
- **Edit Blog**: Below the blog content, there’s an "Edit" button. Clicking this will allow you to modify the blog's content.
- **Delete Blog**: The "Delete" button allows you to permanently remove the blog from the list.
- **Return to Blog List**: Use the "Home" button located on the page to return to the main blog list.

## Adding a New Blog

- **Add Blog Option**: At the top of the homepage, there's an "Add Blog" button. Clicking this will take you to a form where you can create a new blog.
- **Form Fields**: Fill in the necessary fields such as title, content, author name, etc.
- **Submit**: After completing the form, click the "Submit" button to add your new blog to the list.

## Editing an Existing Blog

- **Edit Option**: On the blog details page, click the "Edit" button.
- **Edit Form**: A form will appear with the blog’s current content pre-filled. Make your desired changes and then save them.

## Deleting a Blog

- **Delete Option**: The "Delete" button is located below the blog content on the blog details page.
- **Confirmation**: Clicking this button will prompt you to confirm your action. Once confirmed, the blog will be deleted.

## Returning to Homepage

- **Home Button**: On both the blog details and edit pages, a "Home" button is available. Clicking this will return you to the blog list page.

## Running the Project Locally

### Steps to Run the Project Locally:

1. **Clone the Repository:**

   - Open your terminal and clone the repository using the following command:
     ```bash
     git clone https://github.com/baibhavmandal/ZuPay-Task-Blog-.git
     ```
   - Navigate to the project directory:
     ```bash
     cd ZuPay-Task-Blog-
     ```

2. **Backend Setup:**

   - Navigate to the backend directory:
     ```bash
     cd backend
     ```
   - Install the necessary dependencies:
     ```bash
     npm install
     ```
   - Start the development server:
     ```bash
     npm run dev
     ```

3. **Client Setup:**

   - Open a new terminal and navigate to the client directory:
     ```bash
     cd client
     ```
   - Install the necessary dependencies:
     ```bash
     npm install
     ```
   - Start the development server:
     ```bash
     npm run dev
     ```

4. **Access the Application:**
   - Open your browser and go to `http://localhost:5173` to view and interact with the application locally.

### Note:

- Ensure that both the backend and client servers are running concurrently to access the full functionality of the application.
- Make sure you have Node.js installed on your machine.

## Conclusion

By following the above instructions, you can either access the deployed version of the blog application or run it locally on your machine. Feel free to explore, add, edit, or delete blogs as per your requirements.
