
# Springdale Public School Website

Welcome to the Springdale Public School website! This project is a fully functional and responsive website built with React.js, featuring a modern UI and seamless user experience.

## Features

- **Home Page:** Includes a carousel for key highlights and quick links.
- **About Us:** Provides detailed information about the school’s history, vision, mission, and facilities.
- **Academics:** Details about the curriculum and teaching methodologies.
- **Admissions:** Information about the admission process, criteria, and important dates.
- **Faculty:** Profiles of the teaching and administrative staff.
- **Students:** Details about student life, achievements, and student council.
- **Gallery:** Photo and video gallery with filtering options.
- **Contact Us:** Integrated Typeform for contacting the school, with Zapier automation to send emails.

## Technologies Used

- **React.js:** For building the user interface.
- **React-Bootstrap:** For styling and responsive design.
- **Typeform:** For the contact form integration.
- **Zapier:** For automating email notifications from Typeform submissions.
- **Stitches:** For CSS-in-JS styling.
- **React-Router-Dom:** For client-side routing.

## Installation

Follow these steps to set up and run the project locally:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/springdale-school-website.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd springdale-school-website
   ```

3. **Install Dependencies**

   ```bash
   npm install
   ```

4. **Run the Development Server**

   ```bash
   npm start
   ```

   The app will be available at `http://localhost:3000`.

## Folder Structure

- `src/` – Contains the source code for the project.
  - `components/` – React components like `CustomNavbar`, etc.
  - `pages/` – Page components like `Home`, `AboutUs`, `ContactUs`, etc.
  - `assets/` – Static assets like images and logos.
  - `styles/` – CSS files for styling.
- `public/` – Public static files like `index.html`.

## Deployment

The project is deployed on [Vercel](https://vercel.com) / [Netlify](https://netlify.com) / [GitHub Pages](https://pages.github.com). You can view the live site [here](https://your-deployed-site-link).

## Typeform and Zapier Integration

The Contact Us page features a Typeform form for user inquiries. Submissions are automatically sent to our email using Zapier integration.

### Setting Up Zapier Integration

1. **Create a Zap:** In your Zapier account, create a new Zap.
2. **Connect Typeform:** Set Typeform as the trigger app and configure it to trigger on new form submissions.
3. **Connect Email:** Set your email service as the action app and configure it to send an email upon receiving a Typeform submission.
4. **Map Fields:** Ensure that the fields from Typeform (e.g., Name, Email, Message) are correctly mapped to your email template.

For detailed instructions on setting up Zapier, refer to the [Zapier documentation](https://zapier.com/help/).

## Contribution

Feel free to contribute to this project! To report issues or suggest improvements, please open an issue on the [GitHub repository](https://github.com/yourusername/springdale-school-website/issues).


## Acknowledgements

- [React](https://reactjs.org/) – A JavaScript library for building user interfaces.
- [React-Bootstrap](https://react-bootstrap.github.io/) – Bootstrap components for React.
- [Typeform](https://www.typeform.com/) – Online form building tool.
- [Zapier](https://zapier.com/) – Automation tool for integrating web applications.
- [Stitches](https://stitches.dev/) – CSS-in-JS library for styling.

## Contact

For any questions or inquiries, please contact:

- **Email:** yashkrbaidya@gmail.com

Thank you for visiting the Springdale Public School website!

