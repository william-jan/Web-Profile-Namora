export const featuredProjects = [
  {
    title: "Order Guardian (E-commerce Cancellation Prediction)",
    slug: "order-guardian",
    image: "/assets/order_guardian-project-architecture.png",
    description:
      "Led a 4-member team to build an end-to-end predictive system identifying high-risk e-commerce orders from transactional data. Developed a full pipeline from data ingestion and feature engineering to model deployment in an interactive application.",
    impact:
      "Enables early detection of high-risk orders, improving operational decisions and reducing potential losses.",
    stack:
      "Python • Airflow • Docker • Great Expectations • Scikit-learn • Feature Engineering • Streamlit • Hugging Face • Tableau • SQL",
    links: [
      ["Live Demo", "https://huggingface.co/spaces/Heizsenberg/order-guardian"],
      ["View Code", "https://github.com/FTDS-assignment-bay/p2-final-project-ftds-051-rmt-group-001"],
    ],
  },
  {
    title: "E-Commerce Monitoring Pipeline",
    slug: "monitoring-pipeline",
    image: "/assets/monitoring-architecture.png",
    description:
      "Built an end-to-end data pipeline to monitor e-commerce sales performance and customer retention. Designed ETL workflows using Airflow, implemented data validation with Great Expectations, and delivered insights through Elasticsearch-Kibana dashboards.",
    impact:
      "Enables automated data processing and continuous business monitoring for sales and customer retention.",
    stack: "Python • Airflow • Elasticsearch • Kibana • Docker • Great Expectations • SQL",
    links: [["View Code", "https://github.com/namora-fernando/ecommerce-sales-retention-monitoring-pipeline"]],
  },
  {
    title: "Term Deposit Subscription Model",
    slug: "term-deposit",
    image: "/assets/term-ui.png",
    description:
      "Built a machine learning model to predict customer subscription to term deposits using historical banking data, including feature engineering, model comparison, and deployment.",
    impact:
      "Improves marketing efficiency by targeting high-probability customers and reducing wasted outreach.",
    stack: "Python • Scikit-learn • Feature Engineering • Streamlit • Hugging Face",
    links: [
      ["Live Demo", "https://huggingface.co/spaces/namorafn7/term-deposit-subscription-model"],
      ["View Code", "https://github.com/namora-fernando/term-deposit-subscription-model"],
    ],
  },
  {
    title: "Credit Card Customer Analysis",
    slug: "credit-card",
    image: "/assets/cc-descriptive.png",
    description:
      "Analyzed transaction behavior differences between active and churned customers using EDA, statistical testing, and interactive Tableau dashboards.",
    impact: "Identifies key behavioral differences to support customer retention strategies.",
    stack: "Python • EDA • Statistical Analysis • Tableau",
    links: [
      ["Dashboard", "https://public.tableau.com/app/profile/fernando.namora/viz/P0M1_fernando_namora/CustomerTransactionComparison"],
      ["View Code", "https://github.com/namora-fernando/credit-card-transactions-analysis"],
    ],
  },
];

export const additionalProjects = [
  {
    title: "IMDb Sentiment Analysis",
    slug: "imdb-sentiment",
    image: "/assets/sentiment-ui.png",
    description:
      "Built an end-to-end NLP model to classify IMDb movie reviews into positive and negative sentiment using Bidirectional LSTM. Implemented text preprocessing, custom token handling, and Word2Vec embeddings to improve model generalization.",
    impact:
      "Enables automated sentiment classification for large-scale review data, supporting content analysis and user feedback monitoring.",
    stack: "Python • NLP • TensorFlow • Keras • NLTK • Gensim (Word2Vec) • Deep Learning",
    links: [["View Code", "https://github.com/namora-fernando/sentiment-analysis-bilstm-word2vec"]],
  },
  {
    title: "Inflation Risk Analysis",
    slug: "inflation-risk",
    image: "/assets/inflation-global-overview.png",
    description:
      "Developed an end-to-end analytics workflow to assess global inflation risk using World Bank macroeconomic data. Built a composite risk index and delivered insights through a multi-page Power BI dashboard.",
    impact: "Enables macro-level risk monitoring and cross-country comparison for economic analysis.",
    stack: "Python • Power BI • Pandas • Feature Engineering • Data Visualization",
    links: [["View Code", "https://github.com/namora-fernando/inflation-risk-analysis"]],
  },
  {
    title: "Bank Loan Portfolio Analysis",
    slug: "bank-loan",
    image: "/assets/loan-portfolio-overview.png",
    description:
      "Analyzed a retail bank loan portfolio to understand borrower risk characteristics and segment-level credit risk patterns. Combined Python-based EDA with Tableau dashboards to support risk monitoring.",
    impact: "Identifies high-risk borrower segments and supports data-driven credit risk assessment.",
    stack: "Python • Tableau • Pandas • Risk Analysis • Data Visualization",
    links: [["View Code", "https://github.com/namora-fernando/bank-loan-portfolio-analysis"]],
  },
  {
    title: "Justy Business Analytics",
    slug: "justy",
    image: "/assets/justy-sales-overview.png",
    description:
      "End-to-end business analytics solution combining automated data extraction and Power BI dashboards for operational monitoring.",
    impact:
      "Eliminated manual data retrieval and enabled structured analysis of sales performance, menu trends, and customer behavior.",
    stack: "Python • Selenium • Power BI • Pandas • Excel • DAX",
    links: [
      ["Dashboard Repo", "https://github.com/namora-fernando/justy-sales-dashboard"],
      ["Scraper Code", "https://github.com/namora-fernando/justy-transactions-scraper"],
    ],
  },
];
