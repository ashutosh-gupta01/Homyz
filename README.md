# Homyz – Real Estate Platform

Homyz is a full-stack real estate web application built using the MERN stack. It provides a user-friendly platform to explore property listings, view property details, and manage property-related interactions with secure user authentication.

##  Live Demo

- **Live Website:** [Visit Homyz](https://homyz-frontend.onrender.com)
- **Backend API:** [Homyz Backend](https://homyz-backend-fc41.onrender.com)
- **GitHub Repository:** [View Source Code](https://github.com/ashutosh-gupta01/Homyz)

##  Features

- **Property Listings:** Explore available properties and view detailed information.
- **Property Search:** Browse properties using the search and filtering functionality available in the application.
- **User Authentication:** Auth0 integration for secure user login and authentication.
- **Property Details:** View property information, images, and other available details.
- **Favorites:** Interact with and save favorite properties, if supported by the current implementation.
- **Responsive Interface:** User-friendly interface for different screen sizes.
- **Contact Options:** Access property-related contact information and inquiry options.
- **API Integration:** Connect frontend components with backend services.

##  Tech Stack

### Frontend
- React.js
- JavaScript
- HTML5
- CSS3
- Tailwind CSS, where used
- React Router
- Axios

### Backend
- Node.js
- Express.js
- RESTful APIs

### Database and Authentication
- MongoDB
- Auth0

### Additional Libraries
- Framer Motion
- React Icons
- Swiper

##  Project Structure

```text
Homyz/
├── client/
│   └── frontend/     # React frontend application
├── server/            # Backend application, if present
└── README.md
```

*Note: Update the folder structure above to match the actual repository.*

##  Getting Started

### Prerequisites

- Node.js and npm
- Git
- MongoDB, if required by the backend
- Auth0 application configuration

### 1. Clone the Repository

```bash
git clone https://github.com/ashutosh-gupta01/Homyz.git
cd Homyz
```

### 2. Install Dependencies

Navigate to the directory containing the frontend `package.json` file:

```bash
cd client/frontend
npm install
```

If the repository contains a separate backend with its own `package.json`, navigate to that directory and install its dependencies separately:

```bash
npm install
```

### 3. Configure Environment Variables

Create the required `.env` file in the appropriate directory. Use the exact variable names expected by your application.

For example, Auth0 configuration may require:

```env
AUTH0_DOMAIN=your_auth0_domain
AUTH0_CLIENT_ID=your_auth0_client_id
```

If your frontend uses Vite, client-side variables commonly require the `VITE_` prefix. Refer to your existing code for the exact configuration.

**Security:** Never commit real credentials, access tokens, or private API keys to GitHub.

### 4. Run the Application

Start the frontend using the script configured in its `package.json`. For a Vite application, the command is commonly:

```bash
npm run dev
```

If a separate backend exists, open another terminal, navigate to its directory, and run the configured start script.

##  Key Learning Outcomes

- Developing a full-stack web application using React and Node.js.
- Building reusable React components and interactive interfaces.
- Integrating Auth0 for user authentication.
- Working with RESTful APIs and Axios.
- Connecting frontend components with backend services.
- Managing environment configuration and deployment.
- Debugging application integration issues.

##  Future Improvements

- Advanced property search and filtering.
- Enhanced property comparison and favorites.
- Improved property management workflows.
- Map-based property discovery.
- Enhanced accessibility and mobile experience.

##  Author

**Aashutosh Gupta**

- **GitHub:** [ashutosh-gupta01](https://github.com/ashutosh-gupta01)
- **LinkedIn:** [Aashutosh Gupta](https://www.linkedin.com/in/ashutosh-kumar-gupta-0561ab265/)
- **Portfolio:** [Personal Portfolio](https://personalportfolio-bzqy.onrender.com)

---

If you find this project useful, consider giving the repository a star.
