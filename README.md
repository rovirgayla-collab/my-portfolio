# My Portfolio

## Project Documentation

### Tech Stack
- Frontend: React, CSS, and HTML
- Backend: Node.js, Express
- Database: MongoDB

### Features
- User Authentication
- Dynamic Portfolio Generation
- Responsive Design

### Folder Structure
```
/my-portfolio
├── /client      # Frontend code
├── /server      # Backend API
└── /database    # Database schema definitions
```

### Getting Started Guide
1. **Clone the Repository**: 
   ```bash
   git clone https://github.com/rovirgayla-collab/my-portfolio.git
   cd my-portfolio
   ```
2. **Install Dependencies**: 
   ```bash
   npm install
   ```
   Make sure you install frontend dependencies inside the `/client` directory as well.
3. **Run the Application**:
   ```bash
   npm start  # From the server folder
   # and in another terminal
   cd client && npm start  # From the client folder
   ```

### API Documentation
- **GET /api/portfolio** - Fetches the portfolio data.
- **POST /api/auth/login** - Authenticates the user.
- **POST /api/auth/register** - Registers a new user.

### Database Schemas
- **User Schema**
  ```javascript
  const UserSchema = new mongoose.Schema({
     username: String,
     password: String,
     email: String
  });
  ```
- **Portfolio Schema**
  ```javascript
  const PortfolioSchema = new mongoose.Schema({
     title: String,
     description: String,
     technologies: [String],
     userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  });
  ```

### Deployment Guidelines
1. **Prepare for Production**:
   ```bash
   npm run build  # In the client folder
   ```
2. **Deploy on Heroku**:
   ```bash
   heroku create my-portfolio-app
   git push heroku main
   ```

### Author Information
- **Author**: rovirgayla-collab
- **Email**: myemail@example.com
- **GitHub**: [rovirgayla-collab](https://github.com/rovirgayla-collab)   

### Security Features
- Password hashing and authentication using bcrypt.
- Input validation to prevent SQL injection and XSS attacks.

### Customization Instructions
- Adjust the `config.js` file for your environment settings.
- Modify the folder structure as per requirements but keep the API routes consistent.