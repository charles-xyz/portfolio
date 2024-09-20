/* eslint-disable */
export default function ResumePage() {
    return (
<div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
  <header className="text-center mb-8">
    <h1 className="text-3xl font-bold text-gray-800">Charles Lazaroni</h1>
    <div className="mt-4 text-gray-600">
      <p>
        <a href="mailto:charleslazaroni@gmail.com" className="hover:underline">charleslazaroni@gmail.com</a>
      </p>
      <p>
        <a href="https://linkedin.com/in/charleslazaroni" className="hover:underline">in/charleslazaroni</a>
      </p>
    </div>
  </header>

  <section className="mb-6">
  <div className="mt-4">
  <h2 className="text-xl font-semibold text-gray-800">Most Impactful Thing I Have Done</h2>
  <ul className="list-disc ml-6 mt-2 text-gray-700">
        <li>Going from 0-1 as a technical founder in a venture backed (Jason Calacanis + Launch) startup with thousands of users and hundreds of paying customers.</li> 
      </ul>
    </div>
    <h2 className="text-xl mt-4 font-semibold text-gray-800">Experience</h2>
    <div className="mt-4">
      <h3 className="text-lg font-bold text-gray-700">Founding Engineer, Birdie</h3>
      <p className="italic text-gray-600">January 2023 - Present, Los Angeles / NYC</p>
      <ul className="list-disc ml-6 mt-2 text-gray-700">
        <li>Implemented an LLM augmented by RAG, increasing accuracy 10x compared to base GPT for personalized training content, also recommended videos based on user input. (Python, Pinecone, Langchain, AWS)</li>
        <li>Designed and built a low-latency serverless agent (less than 1s) to create custom on-demand audio guides using Python, RAG, OpenAI API, Langchain, AWS Lambda, and API Gateway.</li>
        <li>Built and scaled an iOS app to hundreds of paying users on the App Store.</li>
        <li>Developed a React application for golf staff to gather user data points and deliver the correct content at the right time.</li>
        <li>Created a domain-specific annotation tool for golf staff to annotate and classify incoming data, substantially increasing production speed and organizational clarity. (React, AWS, OAuth)</li>
        <li>Led a cross-functional team of engineers, designers, and domain experts, guiding project development and fostering a collaborative environment.</li>
      </ul>
    </div>
    <div className="mt-4">
      <h3 className="text-lg font-bold text-gray-700">Freelance Data Science, Analytics, and Engineering</h3>
      <p className="italic text-gray-600">February 2022 - Present, NYC</p>
      <ul className="list-disc ml-6 mt-2 text-gray-700">
        <li>Built a recommendation system for workout videos based on user activity using Python, Pinecone, and Langchain.</li>
        <li>Re-engineered a computer vision app with 10M+ downloads, including mockups, frontend, backend, and ML within a month. (SwiftUI, Python, AWS, Postgres)</li>
        <li>Developed a custom model for an app to help neurodiverse people communicate by recognizing and classifying 23 facial expressions with ~92% accuracy.</li>
      </ul>
    </div>
  </section>

  <section className="mb-6">
    <h2 className="text-xl font-semibold text-gray-800">Projects</h2>
    <div className="mt-4">
      <h3 className="text-lg font-bold text-gray-700">Fraud Detector</h3>
      <ul className="list-disc ml-6 mt-2 text-gray-700">
        <li>Developed a high-accuracy fraud detection model despite imbalanced datasets using Python/PyTorch.</li>
        <li>Utilized 3 modern fraud detection techniques.</li>
        <li>Practiced feature anonymization on 40+ features.</li>
      </ul>
    </div>
  </section>

  <section className="mb-6">
    <h2 className="text-xl font-semibold text-gray-800">Education</h2>
    <div className="mt-4">
      <p className="font-bold text-gray-700">MS, Data Science</p>
      <p className="text-gray-600">Syracuse University, Expected May 2025, 4.0 GPA</p>
    </div>
    <div className="mt-4">
      <p className="font-bold text-gray-700">BA, English</p>
      <p className="text-gray-600">Trinity College, 2016-2021</p>
    </div>
  </section>

  <section className="mb-6">
    <h2 className="text-xl font-semibold text-gray-800">Skills</h2>
    <div className="mt-4">
      <p className="text-gray-700"><span className="font-bold">Languages:</span> Python, R, SQL, PostgreSQL, Swift, Javascript, React, Rust, Bash, TensorFlow, PyTorch, NoSQL, Go / Golang </p>
      <p className="mt-2 text-gray-700"><span className="font-bold">Other Hard Skills:</span> System Design, Git, Project Management, EC2, AWS, Sagemaker, Firebase, Docker, Kubernetes, Kafka, iOS</p>
    </div>
  </section>
</div>
    )
  }