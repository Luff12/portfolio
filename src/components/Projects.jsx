
import { motion } from 'framer-motion';

const projects = [
  {
    number: '01',
    title: 'AeroPredict-AI',
    category: 'Predictive Maintenance',
    description:
      'An AI-powered predictive maintenance application that estimates aircraft engine Remaining Useful Life (RUL) using NASA C-MAPSS sensor data. Includes deep learning models, engine health monitoring, model comparison, and explainable AI.',
    technologies: ['Python', 'TensorFlow', 'LSTM', 'XGBoost', 'SHAP', 'Streamlit'],
    github: 'https://github.com/Luff12/AeroPredict-AI',
  },
  {
    number: '02',
    title: 'IntelliStock',
    category: 'AI Inventory Intelligence',
    description:
      'An inventory intelligence dashboard combining demand forecasting, sales analytics, anomaly detection, and inventory optimization to support smarter stock replenishment decisions.',
    technologies: ['Python', 'XGBoost', 'Pandas', 'SHAP', 'Plotly', 'Streamlit'],
    github: 'https://github.com/Luff12/IntelliStock',
  },
  {
    number: '03',
    title: 'DataFlow Audit',
    category: 'Data Engineering',
    description:
      'A data quality monitoring system that identifies missing values, duplicates, invalid records, and unusual transactions while monitoring pipeline execution and generating data quality reports.',
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'SQLite', 'Plotly', 'Streamlit'],
    github: 'https://github.com/Luff12/DataFlowAudit',
  },
  {
    number: '04',
    title: 'QueryMind',
    category: 'AI-Powered SQL Assistant',
    description:
      'A local-first AI SQL workspace that converts natural language into SQL and supports database exploration, read-only query execution, performance monitoring, and database knowledge retrieval using RAG.',
    technologies: ['Python', 'Ollama', 'ChromaDB', 'SQLAlchemy', 'SQLite', 'Streamlit'],
    github: 'https://github.com/Luff12/QueryMind',
  },
  {
    number: '05',
    title: 'Demand Forecasting & Inventory Optimization',
    category: 'Machine Learning',
    description:
      'A machine learning solution that analyzes product demand, compares forecasting models, and generates inventory replenishment recommendations using safety stock and reorder point calculations.',
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Random Forest', 'Plotly', 'Streamlit'],
    github: 'https://github.com/Luff12/DemandForecastingInventory',
  },
  {
    number: '06',
    title: 'Customer Churn Prediction',
    category: 'Predictive Analytics',
    description:
      'A machine learning project focused on customer data analysis and churn prediction to identify customers who may be at risk of leaving.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib'],
    github: 'https://github.com/Luff12/CustomerChurnPrediction',
  },
  {
    number: '07',
    title: 'Customer Segmentation Using K-Means',
    category: 'Unsupervised Learning',
    description:
      'An interactive customer segmentation application that groups customers based on demographic and purchasing characteristics, with cluster evaluation, customer profiling, and segment exploration.',
    technologies: ['Python', 'Pandas', 'NumPy', 'K-Means', 'Scikit-learn', 'Streamlit'],
    github: 'https://github.com/Luff12/CustomerSegmentationKMeans',
  },
  {
    number: '08',
    title: 'Sales Analytics & Revenue Prediction',
    category: 'Data Analytics',
    description:
      'An end-to-end analytics project that explores sales transactions, evaluates business performance, performs SQL-based analysis, and forecasts future monthly revenue.',
    technologies: ['Python', 'Pandas', 'DuckDB', 'SQL', 'Scikit-learn', 'Streamlit'],
    github: 'https://github.com/Luff12/SalesAnalyticsRevenuePrediction',
  },
  {
    number: '09',
    title: 'Student Performance Dashboard',
    category: 'Data Visualization',
    description:
      'A data analytics project that uses Python and interactive visualizations to explore student performance and present meaningful insights through a dashboard.',
    technologies: ['Python', 'Pandas', 'Matplotlib', 'Plotly', 'Data Visualization'],
    github: 'https://github.com/Luff12/student-performance',
  },
  {
    number: '10',
    title: 'DocuAgent',
    category: 'Agentic AI & RAG',
    description:
      'An AI-powered document analysis agent that uses retrieval-augmented generation to process documents, retrieve relevant information, and answer questions using a local language model.',
    technologies: ['Python', 'LangGraph', 'Ollama', 'ChromaDB', 'Hugging Face', 'Streamlit'],
    github: null,
  },
  {
    number: '11',
    title: 'AI-Based Shopkeeper Assistant',
    category: 'AI Application',
    description:
      'A voice-enabled assistant designed for small shopkeepers in Kerala. Supports Malayalam voice interaction, inventory queries, billing, sales tracking, and business insights.',
    technologies: ['Flutter', 'Dart', 'Dialogflow CX', 'Google Speech API', 'Supabase'],
    github: null,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

function GithubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.68-3.75-1.32-3.75-1.32-.5-1.3-1.24-1.65-1.24-1.65-1.01-.7.08-.69.08-.69 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.62 1.2 3.26.92.1-.73.39-1.2.71-1.48-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.12 2.96.72.78 1.14 1.78 1.14 3.01 0 4.29-2.61 5.23-5.1 5.5.4.35.75 1.03.75 2.08V22c0 .29.2.64.76.53A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative block w-full min-w-0 overflow-hidden bg-[#08090c] py-16 sm:py-20 lg:py-28 text-white"
    >
      {/* Background glow */}
      <div className="absolute top-24 left-0 w-48 h-48 sm:w-80 sm:h-80 bg-[#a3e635]/[0.035] blur-[100px] sm:blur-[130px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-14 lg:mb-16 text-center"
        >
          <p className="mb-3 sm:mb-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-lime-400">
            My Work
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            Featured <span className="text-lime-400">Projects.</span>
          </h2>

          <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base leading-7 sm:leading-8 text-gray-400">
            A collection of projects exploring machine learning,
            data analytics, artificial intelligence, and software development.
          </p>

          <div className="mx-auto mt-6 sm:mt-8 h-1 w-14 sm:w-16 rounded-full bg-lime-400" />
        </motion.div>

        {/* Project Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.03 }}
          className="grid w-full min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6"
        >
          {projects.map((project) => (
            <motion.article
              key={project.number}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#101116] p-5 sm:p-6 lg:p-7 transition-all duration-300 hover:border-lime-400/50 hover:bg-[#14161b]"
            >
              {/* Card Header */}
              <div className="mb-5 sm:mb-6 flex flex-wrap items-center justify-between gap-3">
                <span className="font-mono text-xs sm:text-sm tracking-wider text-gray-600">
                  / {project.number}
                </span>

                <span className="max-w-full rounded-full border border-lime-400/20 bg-lime-400/5 px-2.5 sm:px-3 py-1.5 text-[10px] sm:text-xs font-medium text-lime-400">
                  {project.category}
                </span>
              </div>

              {/* Project Title */}
              <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl lg:text-2xl font-semibold leading-snug text-white transition-colors duration-300 group-hover:text-lime-400 break-words">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mb-5 sm:mb-6 text-sm sm:text-[15px] leading-6 sm:leading-7 text-gray-400">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="max-w-full break-words rounded-md border border-white/10 bg-white/[0.03] px-2.5 sm:px-3 py-1.5 sm:py-2 text-[11px] sm:text-xs text-gray-300 transition-colors duration-300 group-hover:border-white/15"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* GitHub Link */}
              {project.github && (
                <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4 sm:pt-5">
                  <span className="text-[10px] sm:text-xs font-medium uppercase tracking-wider text-gray-600">
                    Project Repository
                  </span>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    title="View on GitHub"
                    className="shrink-0 rounded-full border border-white/10 p-2.5 sm:p-3 text-gray-400 transition-all duration-300 hover:border-lime-400 hover:bg-lime-400 hover:text-black"
                  >
                    <GithubIcon />
                  </a>
                </div>
              )}
            </motion.article>
          ))}
        </motion.div>

        {/* GitHub Profile Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 sm:mt-14 lg:mt-16 flex justify-center"
        >
          <a
            href="https://github.com/Luff12"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 sm:gap-3 rounded-full border border-white/15 px-5 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-semibold text-white transition-all duration-300 hover:border-lime-400 hover:bg-lime-400 hover:text-black"
          >
            <GithubIcon />
            Explore My GitHub
          </a>
        </motion.div>

      </div>
    </section>
  );
}
