export const projects = {
  "order-guardian": {
    title: "Order Guardian",
    subtitle: "Predictive Order Cancellation Risk System",
    logo: "/assets/order_guardian-logo.png",
    links: [
      ["GitHub Repo", "https://github.com/FTDS-assignment-bay/p2-final-project-ftds-051-rmt-group-001"],
      ["Live Demo", "https://huggingface.co/spaces/Heizsenberg/order-guardian"],
    ],
    sections: [
      { heading: "Problem & Approach", paragraphs: ["E-commerce platforms process thousands of daily orders, but cancellations often happen after logistics and inventory have already been allocated.", "This creates operational inefficiencies and wasted resources. Most systems handle cancellations reactively.", "Built as part of a team project, this system predicts high-risk orders before fulfillment begins, enabling proactive intervention."] },
      { heading: "System Architecture", images: [["/assets/order_guardian-project-architecture.png", "End-to-end system flow for order risk classification and intervention."]] },
      { heading: "My Role", list: ["Project Lead managing collaboration across data engineering, analysis, and ML components", "Built Airflow pipeline for data ingestion and transformation", "Performed EDA to identify cancellation patterns", "Developed classification models for risk prediction", "Contributed to deployment via Streamlit"] },
      { heading: "Results", list: ["End-to-end system from raw data to model to deployment", "Real-time prediction interface for business usage", "Improved ability to proactively mitigate order cancellations"] },
    ],
  },
  "monitoring-pipeline": {
    title: "E-Commerce Monitoring Pipeline",
    subtitle: "End-to-End Data Engineering Pipeline for Sales & Retention Monitoring",
    links: [["GitHub Repo", "https://github.com/namora-fernando/ecommerce-sales-retention-monitoring-pipeline"]],
    sections: [
      { heading: "Problem", paragraphs: ["E-commerce platforms generate large volumes of transactional data, but without a structured pipeline, data processing and monitoring become inefficient.", "Manual analysis limits continuous tracking of sales performance and customer retention metrics."] },
      { heading: "Solution", paragraphs: ["Built an end-to-end automated pipeline using Airflow to process data, validate quality, and deliver business-ready datasets to Elasticsearch.", "Integrated ETL workflows, Great Expectations for validation, and Kibana dashboards for monitoring."] },
      { heading: "System Architecture", images: [["/assets/monitoring-architecture.png", "End-to-end data pipeline architecture from ingestion to visualization."]] },
      { heading: "Pipeline Automation", images: [["/assets/airflow-dag.png", "Airflow DAG orchestrating scheduled ETL processes."]] },
      { heading: "Monitoring Dashboard", images: [["/assets/dashboard-kpi.png", ""], ["/assets/dashboard-retention.png", "Kibana dashboards for monitoring revenue and customer retention."]] },
      { heading: "Results", list: ["Fully automated data pipeline from raw data to dashboard", "Improved data reliability with validation layer", "Enabled continuous business monitoring"] },
    ],
  },
  "term-deposit": {
    title: "Term Deposit Subscription Model",
    subtitle: "Predictive Model for Marketing Campaign Optimization",
    links: [
      ["GitHub Repo", "https://github.com/namora-fernando/term-deposit-subscription-model"],
      ["Live Demo", "https://huggingface.co/spaces/namorafn7/term-deposit-subscription-model"],
    ],
    sections: [
      { heading: "Problem & Approach", paragraphs: ["Marketing campaigns for term deposit products often target a broad audience, leading to inefficient resource usage and low conversion rates.", "This project builds a supervised machine learning model to predict which customers are more likely to subscribe, enabling more targeted and efficient marketing strategies.", "The workflow includes exploratory data analysis, feature engineering, model comparison, and deployment as an interactive web application."] },
      { heading: "Modeling Approach", list: ["Compared multiple models: KNN, SVM, Decision Tree, Random Forest, AdaBoost", "Selected best model based on precision score and cross-validation", "Built end-to-end pipeline to prevent data leakage", "Performed hyperparameter tuning for optimal performance"] },
      { heading: "Deployment", paragraphs: ["The final model is deployed using Streamlit on Hugging Face Spaces, allowing real-time predictions based on user input."] },
      { heading: "Application Preview", images: [["/assets/term-eda.png", "Exploratory Data Analysis page showing patterns in customer behavior."], ["/assets/term-ui.png", "Interactive interface for inputting customer data."], ["/assets/term-output.png", "Example prediction result generated from user input."]] },
      { heading: "Results", list: ["Achieved strong precision performance (>70%) on both train and test sets", "Reduced false positives to improve targeting accuracy", "Deployed model for real-time business usage"] },
    ],
  },
  "credit-card": {
    title: "Credit Card Customer Analysis",
    subtitle: "Active vs Churned Customer Behavior Analysis",
    links: [
      ["GitHub Repo", "https://github.com/namora-fernando/credit-card-transactions-analysis"],
      ["View Dashboard", "https://public.tableau.com/app/profile/fernando.namora/viz/P0M1_fernando_namora/CustomerTransactionComparison"],
    ],
    sections: [
      { heading: "Problem & Approach", paragraphs: ["Customer churn is a critical problem in the banking industry. Understanding behavioral differences between active and churned customers can help improve retention strategies.", "This project analyzes transaction behavior using exploratory data analysis, descriptive statistics, and inferential statistical testing to identify meaningful differences."] },
      { heading: "Analysis Approach", list: ["Exploratory Data Analysis (EDA) using Python", "Descriptive statistics comparison between customer groups", "Inferential statistical testing (two-sample t-test)", "Interactive dashboard visualization using Tableau"] },
      { heading: "Interactive Dashboard", iframe: "https://public.tableau.com/views/P0M1_fernando_namora/CustomerTransactionComparison?:showVizHome=no", caption: "Interactive dashboard comparing transaction behavior between active and churned customers." },
      { heading: "Key Insights", list: ["Active customers have significantly higher transaction amounts than churned customers", "Distribution analysis shows clear behavioral separation between groups", "Statistical testing confirms the difference is significant", "Transaction amount is a strong indicator of customer loyalty"] },
      { heading: "Supporting Visuals", images: [["/assets/cc-descriptive.png", "Descriptive statistics comparison between active and churned customers."], ["/assets/cc-inferential.png", "Hypothesis testing results confirming statistical significance."]] },
    ],
  },
  "imdb-sentiment": {
    title: "IMDb Sentiment Analysis",
    subtitle: "Deep Learning Model for Movie Review Sentiment Classification",
    links: [
      ["GitHub Repo", "https://github.com/namora-fernando/imdb-sentiment-analysis-bilstm-word2vec"],
      ["Kaggle Notebook", "https://www.kaggle.com/code/namorafn7/imdb-sentiment-analysis-bidirectionallstm-word2vec"],
      ["Live Demo", "https://huggingface.co/spaces/namorafn7/imdb-sentiment-analysis-bilstm-word2vec"],
    ],
    sections: [
      { heading: "Problem & Approach", paragraphs: ["Movie review platforms like IMDb generate large volumes of user feedback in textual form. Manually analyzing these reviews is inefficient, especially when identifying negative sentiment or overall audience perception.", "This project builds a Natural Language Processing (NLP) model to automatically classify reviews into positive or negative sentiment using a Bidirectional LSTM architecture.", "The workflow includes text preprocessing, feature engineering, baseline model development, and improvement using Word2Vec embeddings with transfer learning."] },
      { heading: "Modeling Approach", list: ["Built baseline ANN models using TextVectorization and Embedding", "Observed overfitting behavior in training-from-scratch approach", "Implemented Word2Vec embeddings to improve representation learning", "Applied EarlyStopping to reduce overfitting and stabilize training", "Final model: Bidirectional LSTM with pretrained embedding"] },
      { heading: "Deployment", paragraphs: ["The final model is deployed on Hugging Face Spaces, allowing users to input custom movie reviews and receive real-time sentiment predictions."] },
      { heading: "Application Preview", images: [["/assets/sentiment-eda.png", "Exploratory Data Analysis page showing visualization insights for modeling."], ["/assets/sentiment-ui.png", "Interactive interface for input custom review to be sentiment analysis."], ["/assets/sentiment-output.png", "Example prediction result generated from user input."]] },
      { heading: "Results", list: ["Achieved ~88% accuracy on test dataset", "Reduced overfitting compared to baseline models", "Improved generalization using Word2Vec embeddings", "Model captures sentiment patterns but still challenged by sarcasm and ambiguity"] },
    ],
  },
  "inflation-risk": {
    title: "Global Inflation Risk Analysis",
    subtitle: "End-to-End Analytics Pipeline & Power BI Dashboard",
    links: [["GitHub Repo", "https://github.com/namora-fernando/inflation-risk-analysis"]],
    sections: [
      { heading: "Problem & Approach", paragraphs: ["Inflation dynamics vary significantly across countries, making it challenging to assess and compare macroeconomic risk consistently.", "This project builds an end-to-end analytical workflow to quantify inflation risk using macroeconomic indicators from the World Bank dataset.", "A composite Inflation Risk Index is engineered to standardize and compare country-level risk across multiple economic dimensions."] },
      { heading: "Data & Features", list: ["Consumer Price Index (CPI)", "GDP Growth Rate", "Money Supply (% of GDP)", "Exchange Rate (LCU per USD)"] },
      { heading: "Methodology", list: ["Data cleaning and preprocessing across multiple countries", "Exploratory analysis of inflation patterns", "Feature engineering to construct composite risk index", "Z-score normalization and weighted aggregation", "Final dataset preparation for dashboard visualization"] },
      { heading: "Dashboard Preview", images: [["/assets/inflation-global-overview.png", "Global view of inflation risk distribution across countries."], ["/assets/inflation-country-deep-dive.png", "Detailed country-level analysis of macroeconomic indicators and risk trends."], ["/assets/inflation-regional-comparison.png", "Comparison of inflation risk patterns across global regions."], ["/assets/inflation-data-methodology.png", "Explanation of data quality handling, feature engineering, and risk index construction."]] },
      { heading: "Results", list: ["Built a composite Inflation Risk Index for cross-country comparison", "Delivered a multi-page Power BI dashboard for macroeconomic insights", "Enabled identification of high-risk regions and trends over time"] },
    ],
  },
  "bank-loan": {
    title: "Bank Loan Portfolio Analysis",
    subtitle: "Borrower Risk Segmentation & Portfolio Monitoring",
    links: [
      ["GitHub Repo", "https://github.com/namora-fernando/bank-loan-portfolio-analysis"],
      ["Dashboard Page 1", "https://public.tableau.com/views/BankLoanPortfolioAnalysis/PortfolioOverview"],
      ["Dashboard Page 2", "https://public.tableau.com/views/BankLoanPortfolioAnalysis/RiskProfileAnalysis"],
      ["Dashboard Page 3", "https://public.tableau.com/views/BankLoanPortfolioAnalysis/CustomersProfile"],
    ],
    sections: [
      { heading: "Problem & Approach", paragraphs: ["Understanding loan performance and borrower risk is critical for managing a bank's credit portfolio.", "This project analyzes loan outcomes and borrower characteristics to identify patterns associated with higher credit risk.", "The workflow combines Python-based exploratory data analysis with interactive Tableau dashboards for business interpretation."] },
      { heading: "Analysis Approach", list: ["Exploratory Data Analysis (EDA) on loan outcomes and borrower profiles", "Comparison between Fully Paid and Charged Off loans", "Segment-level analysis by loan purpose and credit history", "Dashboard-driven exploration using Tableau"] },
      { heading: "Interactive Dashboard", iframe: "https://public.tableau.com/views/BankLoanPortfolioAnalysis/RiskProfileAnalysis?:showVizHome=no", caption: "Interactive dashboard exploring borrower risk characteristics and credit factors." },
      { heading: "Key Insights", list: ["Borrowers with prior credit problems show significantly higher default risk", "Credit score distribution differs clearly between loan outcomes", "Debt and income profiles contribute to risk segmentation", "Loan outcomes are driven by multiple interacting risk factors"] },
      { heading: "Supporting Visuals", images: [["/assets/loan-portfolio-overview.png", "High-level overview of loan portfolio performance, including distribution of loan outcomes and key portfolio metrics."], ["/assets/loan-customer-profile.png", "Segment-level analysis of loan risk across different customer groups and loan purposes."]] },
    ],
  },
  justy: {
    title: "Justy Business Analytics",
    subtitle: "End-to-End Data Pipeline & Sales Performance Dashboard",
    links: [
      ["Dashboard Repo", "https://github.com/namora-fernando/justy-sales-dashboard"],
      ["Scraper Repo", "https://github.com/namora-fernando/justy-transactions-scraper"],
    ],
    sections: [
      { heading: "Business Context", paragraphs: ["This project was developed to support operational analysis for a cafe business using real transaction data from a POS system.", "The objective was to transform raw transaction data into actionable insights for monitoring sales performance, product trends, and customer behavior."] },
      { heading: "Problem", paragraphs: ["The POS system used by the business did not provide structured data export for detailed transaction breakdowns.", "While summary transaction data was available, item-level details had to be accessed manually per transaction, making analysis inefficient and non-scalable."] },
      { heading: "Solution Overview", list: ["Developed an automated web scraping tool to extract detailed transaction data", "Transformed raw data into structured datasets for analysis", "Built a Power BI dashboard to monitor sales and operational performance"] },
      { heading: "Data Pipeline Architecture", list: ["Automated extraction using Selenium-based scraper", "Data transformation using Python and Excel", "Analytical modeling using Power BI and DAX"] },
      { heading: "Dashboard Overview", images: [["/assets/justy-sales-overview.png", "Daily revenue trends and transaction volume overview."], ["/assets/justy-top-menu.png", "Identification of best-selling menu items by volume and revenue."], ["/assets/justy-hourly.png", "Analysis of peak sales hours to understand customer activity patterns."], ["/assets/justy-channel.png", "Comparison of sales performance across dine-in, online, and take-away channels."]] },
      { heading: "Key Insights", list: ["Clear peak hours identified for operational optimization", "Top-selling products contribute disproportionately to revenue", "Sales channel distribution highlights differences in customer behavior", "Daily trends reveal variability in business performance"] },
      { heading: "Data Engineering Component (Scraper)", paragraphs: ["A custom web scraper was developed to automate data extraction from the POS system, replacing manual per-transaction retrieval.", "This component enables a repeatable data pipeline and ensures consistent data availability for analysis."], list: ["Automated navigation and data extraction using Selenium", "Scalable to thousands of transactions", "Exports structured CSV data for downstream analytics"] },
      { heading: "Tools & Technologies", list: ["Python (pandas, Selenium)", "Power BI (DAX, dashboarding)", "Excel (data preparation)"] },
    ],
  },
};
