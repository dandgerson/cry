# Cry / Клич

**A mutual aid platform where users can post requests for help ("кличи") and receive support from the community.**

Our mission is to create a transparent and trustworthy platform that makes it easy for people to help each other in times of need. Whether it's financial assistance, volunteering, or emotional support, "Cry / Клич" connects those who need help with those who are willing to give it.

---

## Features

- **Post and Respond to "Кличи"**: Users can create requests for help (кличи) and receive support from the community.
- **Validation System**: A hybrid system (AI + human moderation) ensures that all requests are genuine and trustworthy.
- **Micro-Donations and Volunteering**: Support others with small financial contributions or by offering your time and skills.
- **Transparent Statistics**: Open data on donations, volunteering, and platform activity to build trust and encourage participation.
- **User-Friendly Interface**: Easy-to-use design with filtering and categorization to find relevant requests quickly.

---

## Tech Stack

- **Frontend**: React, Redux, Styled Components, Radix UI
- **Backend**: JSON Server (to be replaced with a robust database like PostgreSQL)
- **Additional Libraries**: Lucide React, Date FNS, React Router DOM

---

## Getting Started

To set up the project locally, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yourusername/cry-klic.git
   cd cry-klic
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Start the Development Server**:

   ```bash
   npm run dev
   ```

4. **Start the JSON Server** (mock backend):
   ```bash
   npm run server
   ```

Once both servers are running, you can access the app at `http://localhost:5173` and the mock API at `http://localhost:3001`.

---

## Contributing

We welcome contributions from developers who are passionate about making a positive impact! Here's how you can help:

- **Submit Issues**: Report bugs or suggest new features via GitHub Issues.
- **Pull Requests**: Fork the repository, make your changes, and submit a pull request. Please follow our coding standards (see `CONTRIBUTING.md`).
- **Areas for Contribution**:
  - Implementing the validation system (AI integration, moderator tools).
  - Integrating a secure payment gateway for micro-donations.
  - Scaling the backend to support a larger user base.
  - Enhancing the UI/UX for better accessibility and user engagement.

For more details, check out our [Contributing Guidelines](CONTRIBUTING.md).

---

## Roadmap

We have exciting plans for the future of "Cry / Клич":

- **Validation System**: Develop a robust system combining AI and human moderation to ensure trust.
- **Payment Integration**: Enable secure micro-donations via Stripe or PayPal.
- **Scalability**: Replace JSON Server with a scalable database (e.g., PostgreSQL) and deploy on a cloud platform.
- **Community Features**: Add badges, leaderboards, and social sharing to foster a supportive community.
- **Global Expansion**: Adapt the platform for international use, considering cultural and regional needs.

Stay tuned for updates, and feel free to contribute to these goals!

---

## License

The Cry is open-source under the [MIT License](LICENSE). Feel free to use, modify, and share it!

## Contributing

Want to help build The Cry? Check out our [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to get involved.

## Why Contribute?

By contributing to "Cry / Клич," you're not just building a platform—you're helping to create a world where mutual aid is accessible, transparent, and impactful. Whether you're a frontend developer, backend engineer, or designer, your skills can make a real difference in people's lives.

Join us in shaping the future of digital altruism!
