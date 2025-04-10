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
    <h3 className="text-lg font-bold text-gray-700">TruBuild | Machine Learning / Backend Engineer</h3>
    <p className="italic text-gray-600">September 2024 - Present</p>
    <ul className="list-disc ml-6 mt-2 text-gray-700">
      <li>I work with premier construction professionals around the globe to help buildings get built faster.</li>
      <li>Saved our construction leaders thousands of dollars and weeks of time by automating the entire RFP process- Engineered intelligent document processing system that semantically chunks 1000+ page construction documents and dynamically evaluates proposals against unstructured criteria, achieving 93%+ alignment with human experts (Python, AWS, GCS, Vertex AI)</li>
      <li>Led all AI Service Development- Maintained infrastructure at scale for all endpoints in production including our RFP analysis, contract review, and agentic chat for enterprise users while providing C-Suite with technical insights driving product strategy and resource allocation decisions.</li>
    </ul>
  </div>
  <div className="mt-4">
    <h3 className="text-lg font-bold text-gray-700">Birdie | Co-Founder & CTO</h3>
    <p className="italic text-gray-600">October 2022 - 2024</p>
    <ul className="list-disc ml-6 mt-2 text-gray-700">
      <li>A mission to revolutionize golf training technology + make the sport more accessible</li>
      <li>Built the application which served our ~1200 DAUs so they can get immediate feedback on their golf swing without paying for a lesson. Built the dashboard which enables our golf team to provide feedback rapidly. (Swift, Firebase, React).</li>
      <li>Built the first stance analysis tool to help golfers properly address their drives. Used by 3 PGA Tour Players. (R, Python, Linux, AWS, Statistics, Neural Networks)</li>
      <li>Deployed an LLM augmented by RAG for personalized training content which also recommends videos based on user input. (Python, Pinecone, Langchain, AWS)</li>
      <li>Created custom on-demand audio guides for users to practice at the range. This feature proved to be very compelling and converted about 5% of our existing free users. (Go, Python, RAG, OpenAI API, Langchain, & AWS Lambda)</li>
      <li>Built a custom labeling tool so that our data labelers could label objects about 20% faster.</li>
    </ul>
  </div>
</section>

<section className="mb-6">
  <h2 className="text-xl font-semibold text-gray-800">Education</h2>
  <div className="mt-4">
    <p className="font-bold text-gray-700">Syracuse University</p>
    <p className="text-gray-600">Master of Science in Applied Data Science, May 2023 - June 2025, 4.00 GPA</p>
    <p className="text-gray-600">Concentration on Gen AI and Big Data Pipelines</p>
  </div>
  <div className="mt-4">
    <p className="font-bold text-gray-700">Trinity College</p>
    <p className="text-gray-600">Bachelor of Arts in English Literature, May 2021</p>
    <p className="text-gray-600">Researched the impact of modern American politics on discourse and symbolism</p>
  </div>
</section>
</div>
  )
}