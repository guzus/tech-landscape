// ============================================================
// DATA
// ============================================================
var DATA = {
  nodes: [
    { id: "google", name: "Google / Alphabet", cluster: "AI", founded: 1998, hq: "Mountain View, CA", ceo: "Sundar Pichai", description: "Search, cloud, AI, and advertising giant. Parent company Alphabet oversees Google, DeepMind, Waymo, and more." , valuation: 2100 },
    { id: "openai", name: "OpenAI", cluster: "AI", founded: 2015, hq: "San Francisco, CA", ceo: "Sam Altman", description: "Creator of GPT and ChatGPT. Restructured in 2025 into nonprofit foundation + for-profit PBC. Raised $110B at $730B valuation in Feb 2026." , valuation: 730 },
    { id: "anthropic", name: "Anthropic", cluster: "AI", founded: 2021, hq: "San Francisco, CA", ceo: "Dario Amodei", description: "AI safety company building Claude. $380B valuation (Feb 2026). $5B+ revenue run rate. Founded by former OpenAI researchers." , valuation: 380 },
    { id: "deepmind", name: "DeepMind", cluster: "AI", founded: 2010, hq: "London, UK", ceo: "Demis Hassabis", description: "Google-owned AI lab. Created AlphaGo, AlphaFold. Pioneers in reinforcement learning." },
    { id: "nvidia", name: "NVIDIA", cluster: "Hardware", founded: 1993, hq: "Santa Clara, CA", ceo: "Jensen Huang", description: "GPU giant powering the AI revolution. Dominant in AI training chips with 80%+ market share." , valuation: 2800 },
    { id: "apple", name: "Apple", cluster: "Consumer", founded: 1976, hq: "Cupertino, CA", ceo: "Tim Cook", description: "iPhone, Mac, services ecosystem. World's most valuable company." , valuation: 3500 },
    { id: "microsoft", name: "Microsoft", cluster: "Cloud", founded: 1975, hq: "Redmond, WA", ceo: "Satya Nadella", description: "Windows, Azure, Office 365, and major OpenAI investor." , valuation: 3100 },
    { id: "amazon", name: "Amazon", cluster: "Cloud", founded: 1994, hq: "Seattle, WA", ceo: "Andy Jassy", description: "E-commerce and AWS cloud computing leader." , valuation: 2200 },
    { id: "meta", name: "Meta", cluster: "Social", founded: 2004, hq: "Menlo Park, CA", ceo: "Mark Zuckerberg", description: "Facebook, Instagram, WhatsApp, Threads. Betting big on AI and the metaverse." , valuation: 1600 },
    { id: "tiktok", name: "TikTok / ByteDance", cluster: "Social", founded: 2012, hq: "Beijing / LA", ceo: "Shou Chew", description: "Short-video platform with 1B+ users. US ban resolved via JV with Oracle, Silver Lake, and MGX (Jan 2026). ByteDance retains <20%." , valuation: 220 },
    { id: "snap", name: "Snap Inc.", cluster: "Social", founded: 2011, hq: "Santa Monica, CA", ceo: "Evan Spiegel", description: "Snapchat creator. Pioneered Stories format and AR lenses." , valuation: 22 },
    { id: "twitter", name: "X (Twitter)", cluster: "Social", founded: 2006, hq: "San Francisco, CA", ceo: "Elon Musk", description: "Microblogging platform acquired by xAI in 2025. Linda Yaccarino resigned as CEO July 2025. Now part of Musk's AI empire." , valuation: 33 },
    { id: "netflix", name: "Netflix", cluster: "Consumer", founded: 1997, hq: "Los Gatos, CA", ceo: "Ted Sarandos", description: "Streaming giant that disrupted Hollywood." , valuation: 400 },
    { id: "spotify", name: "Spotify", cluster: "Consumer", founded: 2006, hq: "Stockholm / NYC", ceo: "Daniel Ek", description: "World's largest music streaming platform." , valuation: 100 },
    { id: "salesforce", name: "Salesforce", cluster: "Enterprise", founded: 1999, hq: "San Francisco, CA", ceo: "Marc Benioff", description: "CRM market leader. Pioneered SaaS model." , valuation: 280 },
    { id: "oracle", name: "Oracle", cluster: "Enterprise", founded: 1977, hq: "Austin, TX", ceo: "Safra Catz", description: "Enterprise database and cloud giant." , valuation: 450 },
    { id: "ibm", name: "IBM", cluster: "Enterprise", founded: 1911, hq: "Armonk, NY", ceo: "Arvind Krishna", description: "Enterprise computing pioneer. Pivoted to hybrid cloud and AI." , valuation: 220 },
    { id: "snowflake", name: "Snowflake", cluster: "Cloud", founded: 2012, hq: "Bozeman, MT", ceo: "Sridhar Ramaswamy", description: "Cloud data warehouse platform." , valuation: 55 },
    { id: "databricks", name: "Databricks", cluster: "Cloud", founded: 2013, hq: "San Francisco, CA", ceo: "Ali Ghodsi", description: "Unified analytics and AI platform. Raised $5B at $134B valuation (Feb 2026). Revenue run rate $5.4B+, growing 65% YoY." , valuation: 134 },
    { id: "intel", name: "Intel", cluster: "Hardware", founded: 1968, hq: "Santa Clara, CA", ceo: "Lip-Bu Tan", description: "Legacy chip giant under new CEO (Mar 2025). Massive restructuring, 40K layoffs. Secured $5B from NVIDIA, $2B from SoftBank." , valuation: 90 },
    { id: "amd", name: "AMD", cluster: "Hardware", founded: 1969, hq: "Santa Clara, CA", ceo: "Lisa Su", description: "CPU and GPU maker. Surpassed Intel in performance." , valuation: 200 },
    { id: "tsmc", name: "TSMC", cluster: "Hardware", founded: 1987, hq: "Hsinchu, Taiwan", ceo: "C.C. Wei", description: "World's largest chip foundry. Geopolitical flashpoint." , valuation: 900 },
    { id: "qualcomm", name: "Qualcomm", cluster: "Hardware", founded: 1985, hq: "San Diego, CA", ceo: "Cristiano Amon", description: "Mobile chip leader. Snapdragon powers most Android phones." , valuation: 180 },
    { id: "samsung", name: "Samsung", cluster: "Hardware", founded: 1938, hq: "Seoul, South Korea", ceo: "Jong-Hee Han", description: "Consumer electronics, memory chips, and smartphone giant." , valuation: 350 },
    { id: "broadcom", name: "Broadcom", cluster: "Hardware", founded: 1991, hq: "Palo Alto, CA", ceo: "Hock Tan", description: "Semiconductor and infrastructure software conglomerate." , valuation: 800 },
    { id: "tesla", name: "Tesla", cluster: "Transport", founded: 2003, hq: "Austin, TX", ceo: "Elon Musk", description: "EV and clean energy leader. Also pursuing autonomous driving and AI." , valuation: 900 },
    { id: "uber", name: "Uber", cluster: "Transport", founded: 2009, hq: "San Francisco, CA", ceo: "Dara Khosrowshahi", description: "Ride-hailing and delivery platform." , valuation: 160 },
    { id: "lyft", name: "Lyft", cluster: "Transport", founded: 2012, hq: "San Francisco, CA", ceo: "David Risher", description: "Ride-hailing competitor to Uber." , valuation: 8 },
    { id: "waymo", name: "Waymo", cluster: "Transport", founded: 2009, hq: "Mountain View, CA", ceo: "Tekedra Mawakana", description: "Alphabet's self-driving car unit." , valuation: 45 },
    { id: "spacex", name: "SpaceX", cluster: "Transport", founded: 2002, hq: "Hawthorne, CA", ceo: "Gwynne Shotwell", description: "Musk's rocket company. Acquired xAI in Feb 2026 ($1.25T combined). Starlink: 9.2M subscribers, $10.6B revenue. Planning IPO at ~$1.5T." , valuation: 1250 },
    { id: "stripe", name: "Stripe", cluster: "Fintech", founded: 2010, hq: "San Francisco, CA", ceo: "Patrick Collison", description: "Online payments infrastructure." , valuation: 90 },
    { id: "block", name: "Block (Square)", cluster: "Fintech", founded: 2009, hq: "Oakland, CA", ceo: "Jack Dorsey", description: "Square POS, Cash App, and Bitcoin advocacy." , valuation: 35 },
    { id: "palantir", name: "Palantir", cluster: "Enterprise", founded: 2003, hq: "Denver, CO", ceo: "Alex Karp", description: "Data analytics for government and enterprise." , valuation: 230 },
    { id: "airbnb", name: "Airbnb", cluster: "Consumer", founded: 2008, hq: "San Francisco, CA", ceo: "Brian Chesky", description: "Home-sharing platform that disrupted hospitality." , valuation: 90 },
    { id: "adobe", name: "Adobe", cluster: "Enterprise", founded: 1982, hq: "San Jose, CA", ceo: "Shantanu Narayen", description: "Creative and document software leader. CEO Narayen announced stepping down Mar 2026. AI Firefly competing in generative content." , valuation: 180 },
    { id: "epic", name: "Epic Games", cluster: "Consumer", founded: 1991, hq: "Cary, NC", ceo: "Tim Sweeney", description: "Fortnite creator and Unreal Engine maker." , valuation: 32 },
    { id: "arm", name: "Arm Holdings", cluster: "Hardware", founded: 1990, hq: "Cambridge, UK", ceo: "Rene Haas", description: "Chip architecture licensor. ARM designs power all smartphones." , valuation: 150 },
    { id: "xai", name: "xAI", cluster: "AI", founded: 2023, hq: "San Francisco, CA", ceo: "Elon Musk", description: "Musk's AI company building Grok. Acquired X/Twitter in 2025. Then acquired by SpaceX in Feb 2026 ($1.25T combined). Reached $230B valuation." , valuation: 230 },
    { id: "mistral", name: "Mistral AI", cluster: "AI", founded: 2023, hq: "Paris, France", ceo: "Arthur Mensch", description: "French AI lab building open-weight models. Raised \u20AC1.7B Series C at \u20AC11.7B valuation (Sep 2025). ASML took 11% stake. Europe's AI champion." , valuation: 14 },
    { id: "perplexity", name: "Perplexity", cluster: "AI", founded: 2022, hq: "San Francisco, CA", ceo: "Aravind Srinivas", description: "AI-powered search engine challenging Google. $20B valuation (Sep 2025). $200M+ ARR. $1.5B total funding." , valuation: 20 },
    { id: "cohere", name: "Cohere", cluster: "AI", founded: 2019, hq: "Toronto, Canada", ceo: "Aidan Gomez", description: "Enterprise AI platform. Co-founded by Transformer paper co-author. Focused on enterprise NLP and RAG." , valuation: 5.5 },
    { id: "stability", name: "Stability AI", cluster: "AI", founded: 2019, hq: "London, UK", ceo: "Prem Akkaraju", description: "Created Stable Diffusion. Pioneered open-source image generation. Turbulent leadership and funding history." , valuation: 1 },
    { id: "midjourney", name: "Midjourney", cluster: "AI", founded: 2021, hq: "San Francisco, CA", ceo: "David Holz", description: "AI image generation leader. Bootstrapped, profitable, no VC funding. Known for artistic quality." , valuation: 10 },
    { id: "huggingface", name: "Hugging Face", cluster: "AI", founded: 2016, hq: "New York, NY", ceo: "Cl\u00e9ment Delangue", description: "The GitHub of AI. Open-source model hub hosting 500K+ models. Essential infrastructure for the AI ecosystem." , valuation: 4.5 },
    { id: "runway", name: "Runway", cluster: "AI", founded: 2018, hq: "New York, NY", ceo: "Cristobal Valenzuela", description: "AI video generation pioneer. Gen-2 and Gen-3 models. Hollywood partnerships for AI filmmaking tools." , valuation: 4 },
    { id: "scale", name: "Scale AI", cluster: "AI", founded: 2016, hq: "San Francisco, CA", ceo: "Alexandr Wang", description: "AI data labeling and evaluation platform. Key supplier to OpenAI, Meta, and US defense. Youngest self-made billionaire." , valuation: 14 },
    { id: "inflection", name: "Inflection AI", cluster: "AI", founded: 2022, hq: "Palo Alto, CA", ceo: "Sean White", description: "Built Pi chatbot. Most of team hired by Microsoft in 2024. Founded by DeepMind co-founder Mustafa Suleyman." , valuation: 4 },
    { id: "character", name: "Character.AI", cluster: "AI", founded: 2021, hq: "Menlo Park, CA", ceo: "Karan Anand", description: "AI chatbot platform. Founders returned to Google in 2024. New CEO (ex-Meta VP) Jun 2025. Settled teen safety lawsuits Jan 2026." , valuation: 2.5 },
    { id: "databricksai", name: "Mosaic ML", cluster: "AI", founded: 2021, hq: "San Francisco, CA", ceo: "Naveen Rao", description: "AI training platform acquired by Databricks for $1.3B. Built MPT open-source models." , valuation: 1.3 },
    { id: "together", name: "Together AI", cluster: "AI", founded: 2022, hq: "San Francisco, CA", ceo: "Vipul Ved Prakash", description: "Cloud platform for running open-source AI models. Democratizing access to AI compute and inference." , valuation: 3.3 },
    { id: "replicate", name: "Replicate", cluster: "AI", founded: 2019, hq: "San Francisco, CA", ceo: "Ben Firshman", description: "Run AI models in the cloud with one line of code. Making AI accessible to developers without ML expertise." , valuation: 1 },

    // === Additional Companies ===
    { id: "paypal", name: "PayPal", cluster: "Fintech", founded: 1998, hq: "San Jose, CA", ceo: "Alex Chriss", description: "Online payments pioneer. The original 'PayPal Mafia' spawned Tesla, LinkedIn, Palantir, YouTube, and Yelp." , valuation: 85 },
    { id: "shopify", name: "Shopify", cluster: "Enterprise", founded: 2006, hq: "Ottawa, Canada", ceo: "Tobi L\u00fctke", description: "E-commerce platform powering millions of online stores. The anti-Amazon for small businesses." , valuation: 140 },
    { id: "cloudflare", name: "Cloudflare", cluster: "Cloud", founded: 2009, hq: "San Francisco, CA", ceo: "Matthew Prince", description: "Internet infrastructure and security company. CDN, DNS, DDoS protection. Quietly powers ~20% of the web." , valuation: 45 },
    { id: "figma", name: "Figma", cluster: "Enterprise", founded: 2012, hq: "San Francisco, CA", ceo: "Dylan Field", description: "Collaborative design tool that dethroned Sketch. Adobe tried to buy for $20B but regulators blocked it." , valuation: 12.5 },
    { id: "zoom", name: "Zoom", cluster: "Enterprise", founded: 2011, hq: "San Jose, CA", ceo: "Eric Yuan", description: "Video conferencing platform that became a verb during COVID. Grew from 10M to 300M daily users in months." , valuation: 25 },
    { id: "discord", name: "Discord", cluster: "Social", founded: 2015, hq: "San Francisco, CA", ceo: "Jason Citron", description: "Community platform for gamers that expanded to mainstream. 200M+ monthly users. Rejected Microsoft's $12B acquisition offer." , valuation: 15 },
    { id: "notion", name: "Notion", cluster: "Enterprise", founded: 2013, hq: "San Francisco, CA", ceo: "Ivan Zhao", description: "All-in-one workspace combining docs, wikis, and project management. Cult following among startups and teams." , valuation: 10 },
    { id: "github", name: "GitHub", cluster: "Enterprise", founded: 2008, hq: "San Francisco, CA", ceo: "Thomas Dohmke", description: "World's largest code hosting platform. Acquired by Microsoft. GitHub Copilot pioneered AI-assisted coding." , valuation: 7.5 },
    { id: "coinbase", name: "Coinbase", cluster: "Fintech", founded: 2012, hq: "Remote (US)", ceo: "Brian Armstrong", description: "Largest US crypto exchange. First major crypto company to IPO. SEC lawsuit dismissed Feb 2025 under new admin." , valuation: 65 },
    { id: "reddit", name: "Reddit", cluster: "Social", founded: 2005, hq: "San Francisco, CA", ceo: "Steve Huffman", description: "The front page of the internet. IPO'd 2024. Revenue $2.2B in 2025 (up 69%). Profitable. Key AI training data source for Google and OpenAI." , valuation: 30 },
    { id: "crowdstrike", name: "CrowdStrike", cluster: "Enterprise", founded: 2011, hq: "Austin, TX", ceo: "George Kurtz", description: "Cybersecurity leader in endpoint protection. Caused massive global IT outage in July 2024 via faulty update." , valuation: 90 },
    { id: "servicenow", name: "ServiceNow", cluster: "Enterprise", founded: 2004, hq: "Santa Clara, CA", ceo: "Bill McDermott", description: "Enterprise workflow automation platform. $200B+ market cap. Quietly one of the most valuable SaaS companies." , valuation: 200 },
    { id: "mongodb", name: "MongoDB", cluster: "Cloud", founded: 2007, hq: "New York, NY", ceo: "Dev Ittycheria", description: "Leading NoSQL database. Popular with startups and modern apps. Competes with traditional SQL databases." , valuation: 25 },
    { id: "doordash", name: "DoorDash", cluster: "Transport", founded: 2013, hq: "San Francisco, CA", ceo: "Tony Xu", description: "Largest US food delivery platform. Won the delivery wars against Uber Eats, Grubhub, and Postmates." , valuation: 70 },
    { id: "pinterest", name: "Pinterest", cluster: "Social", founded: 2010, hq: "San Francisco, CA", ceo: "Bill Ready", description: "Visual discovery platform. Unique position between social media and e-commerce. Profitable and growing." , valuation: 22 },
    { id: "robinhood", name: "Robinhood", cluster: "Fintech", founded: 2013, hq: "Menlo Park, CA", ceo: "Vlad Tenev", description: "Commission-free trading app that democratized investing. GameStop saga made it both famous and controversial." , valuation: 40 },
    { id: "rivian", name: "Rivian", cluster: "Transport", founded: 2009, hq: "Irvine, CA", ceo: "RJ Scaringe", description: "EV maker backed by Amazon and VW. R1T truck, R1S SUV. VW joint venture (up to $5.8B) for shared software platform launched Nov 2024." , valuation: 15 },
    { id: "cisco", name: "Cisco", cluster: "Enterprise", founded: 1984, hq: "San Jose, CA", ceo: "Chuck Robbins", description: "Networking infrastructure giant. Routers, switches, and security. Acquired Splunk for $28B in 2024." , valuation: 230 },

    // === AI-Related Companies (Wave 3) ===
    { id: "cursor", name: "Cursor", cluster: "AI", founded: 2022, hq: "San Francisco, CA", ceo: "Michael Truell", description: "AI-native code editor. $1B+ ARR (Dec 2025). $29.3B valuation. 1M+ daily active users. Fastest-growing dev tool in history." , valuation: 29.3 },
    { id: "cognition", name: "Cognition", cluster: "AI", founded: 2023, hq: "San Francisco, CA", ceo: "Scott Wu", description: "Creator of Devin, the first AI software engineer. Raised at $2B valuation. Polarizing demo sparked 'AI replacing developers' debate." , valuation: 2 },
    { id: "elevenlabs", name: "ElevenLabs", cluster: "AI", founded: 2022, hq: "New York, NY", ceo: "Mati Staniszewski", description: "AI voice synthesis leader. Realistic text-to-speech and voice cloning. Used in content creation, gaming, and accessibility." , valuation: 3.3 },
    { id: "suno", name: "Suno", cluster: "AI", founded: 2023, hq: "Cambridge, MA", ceo: "Mikey Shulman", description: "AI music generation. Create full songs from text prompts. Facing copyright lawsuits from major record labels." , valuation: 0.5 },
    { id: "udio", name: "Udio", cluster: "AI", founded: 2023, hq: "New York, NY", ceo: "David Ding", description: "AI music generation rival to Suno. Founded by ex-Google DeepMind researchers. Also facing music industry lawsuits." , valuation: 0.2 },
    { id: "pika", name: "Pika", cluster: "AI", founded: 2023, hq: "Palo Alto, CA", ceo: "Demi Guo", description: "AI video generation startup founded by Stanford researchers. Competing with Runway, Sora, and Kling in AI filmmaking." , valuation: 0.8 },
    { id: "glean", name: "Glean", cluster: "AI", founded: 2019, hq: "Palo Alto, CA", ceo: "Arvind Jain", description: "Enterprise AI search. Connects to all company tools and finds information instantly. Valued at $4.6B. Founded by ex-Google engineer." , valuation: 4.6 },
    { id: "adept", name: "Adept AI", cluster: "AI", founded: 2022, hq: "San Francisco, CA", ceo: "Zach Bogue", description: "Built AI agents for computer use. Most of team hired by Amazon in 2024. Co-founder was former OpenAI VP of Research." , valuation: 1 },
    { id: "groq", name: "Groq", cluster: "AI", founded: 2016, hq: "Mountain View, CA", ceo: "Jonathan Ross", description: "Custom AI inference chips (LPU). Claims fastest LLM inference speeds. Founded by ex-Google TPU architect." , valuation: 2.8 },
    { id: "cerebras", name: "Cerebras", cluster: "Hardware", founded: 2016, hq: "Sunnyvale, CA", ceo: "Andrew Feldman", description: "Builds the world's largest chip \u2014 the WSE-3 wafer-scale engine. Challenges NVIDIA's GPU dominance with a radically different architecture." , valuation: 4 },
    { id: "sambanova", name: "SambaNova", cluster: "AI", founded: 2017, hq: "Palo Alto, CA", ceo: "Rodrigo Liang", description: "Full-stack AI platform with custom chips. Enterprise AI solutions. Competes with NVIDIA for AI training and inference hardware." , valuation: 5.1 },
    { id: "ai21", name: "AI21 Labs", cluster: "AI", founded: 2017, hq: "Tel Aviv, Israel", ceo: "Ori Goshen", description: "Israeli AI lab building Jamba models. Enterprise-focused language AI. Founded by AI pioneers from Hebrew University." , valuation: 4 },
    { id: "aleph", name: "Aleph Alpha", cluster: "AI", founded: 2019, hq: "Heidelberg, Germany", ceo: "Jonas Andrulis", description: "German sovereign AI company. Luminous models for European enterprise. Focus on data sovereignty and EU compliance." , valuation: 1.3 },
    { id: "baidu", name: "Baidu", cluster: "AI", founded: 2000, hq: "Beijing, China", ceo: "Robin Li", description: "China's Google. Search engine, autonomous driving (Apollo), and Ernie AI models. Leading Chinese AI company." , valuation: 40 },
    { id: "sensetime", name: "SenseTime", cluster: "AI", founded: 2014, hq: "Hong Kong", ceo: "Xu Li", description: "China's largest AI software company. Computer vision, autonomous driving, smart city tech. US-sanctioned since 2021." , valuation: 10 },
    { id: "zhipu", name: "Zhipu AI", cluster: "AI", founded: 2019, hq: "Beijing, China", ceo: "Zhang Peng", description: "Chinese AI lab building GLM models. Backed by Tencent. China's answer to OpenAI with ChatGLM competing against ChatGPT." , valuation: 3 },
    { id: "moonshot", name: "Moonshot AI", cluster: "AI", founded: 2023, hq: "Beijing, China", ceo: "Yang Zhilin", description: "Chinese AI startup building Kimi chatbot. Known for long-context models (200K+ tokens). Founded by ex-Tsinghua researchers." , valuation: 3 },
    { id: "minimax", name: "MiniMax", cluster: "AI", founded: 2021, hq: "Shanghai, China", ceo: "Yan Junjie", description: "Chinese multimodal AI company. Built Hailuo AI video generator and Talkie character chatbot. Major Tencent investment." , valuation: 2.5 },
    { id: "figure", name: "Figure AI", cluster: "AI", founded: 2022, hq: "Sunnyvale, CA", ceo: "Brett Adcock", description: "Humanoid robot startup. Figure 03 (Oct 2025). $39B valuation. Ended OpenAI partnership, built proprietary Helix AI. BotQ factory: 12K robots/year." , valuation: 39 },
    { id: "physical", name: "Physical Intelligence", cluster: "AI", founded: 2024, hq: "San Francisco, CA", ceo: "Karol Hausman", description: "Building foundation models for robots. \u03C00 model enables robots to fold laundry and assemble boxes. $400M raise at $2.4B." , valuation: 2.4 },
    { id: "worldlabs", name: "World Labs", cluster: "AI", founded: 2024, hq: "San Francisco, CA", ceo: "Fei-Fei Li", description: "Spatial intelligence AI. Founded by 'Godmother of AI' Fei-Fei Li. Building large world models for 3D understanding." , valuation: 1 },
    { id: "sakana", name: "Sakana AI", cluster: "AI", founded: 2023, hq: "Tokyo, Japan", ceo: "David Ha", description: "Japanese AI lab founded by ex-Google Brain researchers. Nature-inspired AI. Japan's flagship AI startup backed by Lux, Khosla." , valuation: 1.5 },
    { id: "poolside", name: "Poolside", cluster: "AI", founded: 2023, hq: "San Francisco, CA", ceo: "Jason Warner", description: "AI coding company training models specifically for software engineering. $500M raised. Founded by ex-GitHub CTO." , valuation: 3 },
    { id: "magic", name: "Magic", cluster: "AI", founded: 2022, hq: "San Francisco, CA", ceo: "Eric Steinberger", description: "Building AI software engineer with extremely long context. Targeting 100M+ token context windows for entire codebases." , valuation: 1.5 },
    { id: "harvey", name: "Harvey AI", cluster: "AI", founded: 2022, hq: "San Francisco, CA", ceo: "Winston Weinberg", description: "AI for lawyers. Used by top law firms including Allen & Overy. The leading vertical AI application in legal." , valuation: 3 },
    { id: "sierra", name: "Sierra AI", cluster: "AI", founded: 2023, hq: "San Francisco, CA", ceo: "Bret Taylor", description: "AI agents for customer service. Founded by ex-Salesforce CEO Bret Taylor and ex-Google VP Clay Bavor." , valuation: 4.5 },
    { id: "wandb", name: "Weights & Biases", cluster: "AI", founded: 2017, hq: "San Francisco, CA", ceo: "Lukas Biewald", description: "ML experiment tracking and model management platform. Used by OpenAI, NVIDIA, and most AI labs. The GitHub of ML experiments." , valuation: 1.3 },
    { id: "deepseek", name: "DeepSeek", cluster: "AI", founded: 2023, hq: "Hangzhou, China", ceo: "Liang Wenfeng", description: "Chinese AI lab that shocked the world. R1 model matched top US models at a fraction of the cost (Jan 2025). Caused $1T+ tech stock crash. Top free app in US.", valuation: 2 },

    // === Global Tech Companies ===
    { id: "tencent", name: "Tencent", cluster: "Social", founded: 1998, hq: "Shenzhen, China", ceo: "Ma Huateng", description: "Chinese tech giant. WeChat (1.3B users), gaming (owns Riot Games, stakes in Epic), cloud, fintech. One of world's most valuable companies.", valuation: 450 },
    { id: "alibaba", name: "Alibaba", cluster: "Cloud", founded: 1999, hq: "Hangzhou, China", ceo: "Eddie Wu", description: "Chinese e-commerce and cloud giant. Alibaba Cloud is Asia's #1. Split into 6 business units in 2023. Qwen AI models.", valuation: 280 },
    { id: "softbank", name: "SoftBank", cluster: "Fintech", founded: 1981, hq: "Tokyo, Japan", ceo: "Masayoshi Son", description: "Japanese tech conglomerate and investor. Vision Fund invested in Uber, WeWork, Arm, ByteDance. Led OpenAI's $40B round.", valuation: 100 },
    { id: "sony", name: "Sony", cluster: "Consumer", founded: 1946, hq: "Tokyo, Japan", ceo: "Hiroki Totoki", description: "PlayStation, movies, music, and image sensors. World's largest music publisher and #2 gaming platform.", valuation: 190 },
    { id: "nintendo", name: "Nintendo", cluster: "Consumer", founded: 1889, hq: "Kyoto, Japan", ceo: "Shuntaro Furukawa", description: "Iconic gaming company. Switch sold 146M+ units. Mario, Zelda, Pokemon franchises. Switch 2 launching 2025.", valuation: 80 },
    { id: "sap", name: "SAP", cluster: "Enterprise", founded: 1972, hq: "Walldorf, Germany", ceo: "Christian Klein", description: "Europe's most valuable tech company. Enterprise ERP software running 77% of global business transactions.", valuation: 300 },
    { id: "spotify2", name: "Tencent Music", cluster: "Consumer", founded: 2016, hq: "Shenzhen, China", ceo: "Cussion Pang", description: "China's largest music streaming platform. QQ Music, Kugou, Kuwo. 600M+ users. Tencent subsidiary.", valuation: 20 },
    { id: "grab", name: "Grab", cluster: "Transport", founded: 2012, hq: "Singapore", ceo: "Anthony Tan", description: "Southeast Asia's super app. Ride-hailing, delivery, payments, banking across 8 countries. The Uber of SEA.", valuation: 15 },
    { id: "sea", name: "Sea Limited", cluster: "Consumer", founded: 2009, hq: "Singapore", ceo: "Forrest Li", description: "Southeast Asian tech giant. Shopee (e-commerce), Garena (gaming), SeaMoney (fintech). Largest tech company in SEA.", valuation: 40 },
    { id: "mercadolibre", name: "MercadoLibre", cluster: "Consumer", founded: 1999, hq: "Buenos Aires, Argentina", ceo: "Marcos Galperin", description: "Latin America's Amazon + PayPal. E-commerce and fintech platform across 18 countries. Most valuable LatAm tech company.", valuation: 95 },
    { id: "asml", name: "ASML", cluster: "Hardware", founded: 1984, hq: "Veldhoven, Netherlands", ceo: "Christophe Fouquet", description: "Monopoly on EUV lithography machines. Every advanced chip from TSMC, Samsung, Intel requires ASML equipment. The most critical company in tech.", valuation: 280 },
    { id: "spotify3", name: "KDDI / Jio", cluster: "Cloud", founded: 2007, hq: "Mumbai, India", ceo: "Mukesh Ambani", description: "Jio Platforms disrupted Indian telecom with free 4G. 470M+ subscribers. India's largest tech platform. Backed by Google and Meta.", valuation: 110 },
    { id: "samsung2", name: "SK Hynix", cluster: "Hardware", founded: 1983, hq: "Icheon, South Korea", ceo: "Kwak Noh-Jung", description: "World's #2 memory chipmaker. HBM (High Bandwidth Memory) chips critical for AI training. NVIDIA's key memory supplier.", valuation: 80 },
    { id: "wise", name: "Wise", cluster: "Fintech", founded: 2011, hq: "London, UK", ceo: "Kristo K\u00e4\u00e4rmann", description: "International money transfer platform. Cheaper and faster than banks. 12M+ customers. Profitable since 2017.", valuation: 12 },
    { id: "canva", name: "Canva", cluster: "Enterprise", founded: 2012, hq: "Sydney, Australia", ceo: "Melanie Perkins", description: "Design platform for everyone. 190M+ monthly users. Competes with Adobe for non-professional design market. Australian tech success story.", valuation: 26 },
    { id: "klarna", name: "Klarna", cluster: "Fintech", founded: 2005, hq: "Stockholm, Sweden", ceo: "Sebastian Siemiatkowski", description: "Buy Now Pay Later pioneer. 150M+ users globally. IPO'd 2025 at $15B. Replaced 700 customer service agents with AI.", valuation: 15 },
    { id: "revolut", name: "Revolut", cluster: "Fintech", founded: 2015, hq: "London, UK", ceo: "Nikolay Storonsky", description: "Digital banking super app. 45M+ customers. UK banking license in 2024. Europe's most valuable fintech at $45B.", valuation: 45 },

    // === Missing Notable Companies ===
    { id: "valve", name: "Valve", cluster: "Consumer", founded: 1996, hq: "Bellevue, WA", ceo: "Gabe Newell", description: "Private gaming company behind Steam, Counter-Strike, Dota, and Steam Deck. Forbes estimated Gabe Newell's 50.1% stake at $11B in March 2026, implying roughly a $22B company valuation.", valuation: 22 },
    { id: "roblox", name: "Roblox", cluster: "Consumer", founded: 2004, hq: "San Mateo, CA", ceo: "David Baszucki", description: "User-generated gaming and virtual-world platform with a large creator economy and deep reach among younger audiences.", valuation: 42.8 },
    { id: "paloalto", name: "Palo Alto Networks", cluster: "Enterprise", founded: 2005, hq: "Santa Clara, CA", ceo: "Nikesh Arora", description: "Cybersecurity leader spanning firewalls, cloud security, and SOC platforms. One of the biggest winners from enterprise security platform consolidation.", valuation: 134.6 },
    { id: "twilio", name: "Twilio", cluster: "Enterprise", founded: 2008, hq: "San Francisco, CA", ceo: "Khozema Shipchandler", description: "Communications APIs and customer engagement platform. Also owns Segment, making it a major developer-facing player in messaging and customer data.", valuation: 19 },
    { id: "infosys", name: "Infosys", cluster: "Enterprise", founded: 1981, hq: "Bengaluru, India", ceo: "Salil Parekh", description: "Indian IT services and consulting giant. A global leader in outsourcing, digital transformation, cloud, and enterprise AI services.", valuation: 56.9 },
    { id: "wipro", name: "Wipro", cluster: "Enterprise", founded: 1945, hq: "Bengaluru, India", ceo: "Srini Pallia", description: "Indian IT services and consulting firm with large global delivery operations across cloud, engineering, cybersecurity, and business transformation.", valuation: 24.9 },
    { id: "naver", name: "NAVER", cluster: "Social", founded: 1999, hq: "Seongnam, South Korea", ceo: "Choi Soo-yeon", description: "South Korea's leading search and internet platform. Also owns major commerce, cloud, AI, and web content assets including Webtoon.", valuation: 22.4 },
    { id: "kakao", name: "Kakao", cluster: "Social", founded: 2010, hq: "Jeju City, South Korea", ceo: "Chung Shin-a", description: "KakaoTalk super-app company spanning messaging, fintech, mobility, content, and AI services across South Korea.", valuation: 15 },
    { id: "atlassian", name: "Atlassian", cluster: "Enterprise", founded: 2002, hq: "Sydney, Australia", ceo: "Mike Cannon-Brookes", description: "Maker of Jira, Confluence, Trello, and Bitbucket. One of the core workflow platforms for software and IT teams.", valuation: 19.6 },
    { id: "datadog", name: "Datadog", cluster: "Cloud", founded: 2010, hq: "New York, NY", ceo: "Olivier Pomel", description: "Cloud observability and security platform spanning infrastructure monitoring, logs, APM, and incident response.", valuation: 45.1 },
    { id: "splunk", name: "Splunk", cluster: "Enterprise", founded: 2003, hq: "San Francisco, CA", ceo: "Kamal Hathi (GM)", description: "Cisco-owned security and observability platform built around machine data, SIEM, and log analytics. Cisco acquired Splunk for about $28B in 2024.", valuation: 28 },
    { id: "byd", name: "BYD", cluster: "Transport", founded: 1995, hq: "Shenzhen, China", ceo: "Wang Chuanfu", description: "Chinese EV and battery giant. A global leader in both battery electric and plug-in hybrid vehicles and one of Tesla's main challengers.", valuation: 134.1 },
    { id: "nio", name: "NIO", cluster: "Transport", founded: 2014, hq: "Shanghai, China", ceo: "William Li", description: "Chinese premium EV maker known for battery swapping, software-heavy vehicles, and a strong brand in the smart EV segment.", valuation: 13.8 },
    { id: "linkedin", name: "LinkedIn", cluster: "Social", founded: 2002, hq: "Sunnyvale, CA", ceo: "Ryan Roslansky", description: "Professional network owned by Microsoft. Its business spans recruiting, ads, subscriptions, learning, and B2B data products.", valuation: 26.2 },
    { id: "disney", name: "Disney / Disney+", cluster: "Consumer", founded: 1923, hq: "Burbank, CA", ceo: "Josh D'Amaro", description: "Media and entertainment giant. Disney+ anchors its streaming strategy alongside Hulu and ESPN as the company pushes deeper into direct-to-consumer distribution.", valuation: 178.9 }
  ],
  edges: [
    { source: "google", target: "apple", type: "frenemy", strength: 5, startYear: 2007, endYear: null,
      summary: "The defining frenemy relationship in tech. Allies when iPhone launched with Google apps, turned bitter rivals over Android, Maps, and AI assistants.",
      events: [
        { year: 2007, text: "iPhone launches with Google Maps, YouTube as default apps" },
        { year: 2008, text: "Google launches Android \u2014 Apple feels betrayed" },
        { year: 2012, text: "Apple replaces Google Maps with Apple Maps" },
        { year: 2017, text: "Google pays Apple billions to remain default search engine" },
        { year: 2020, text: "DOJ antitrust suit examines Google-Apple search deal" },
        { year: 2025, text: "Google pays $20B+/year to stay default on Safari" }
      ]},
    { source: "google", target: "microsoft", type: "rival", strength: 4, startYear: 2004, endYear: null,
      summary: "Two-decade search and productivity war. Bing never caught Search, but Azure challenges GCP, and Copilot challenges Gemini.",
      events: [
        { year: 2004, text: "Google IPO threatens Microsoft's web dominance" },
        { year: 2009, text: "Microsoft launches Bing search engine" },
        { year: 2011, text: "Google launches Chromebook, challenging Windows" },
        { year: 2023, text: "Microsoft integrates GPT-4 into Bing" },
        { year: 2024, text: "Copilot vs Gemini becomes the new battleground" }
      ]},
    { source: "apple", target: "meta", type: "rival", strength: 5, startYear: 2021, endYear: null,
      summary: "Apple's App Tracking Transparency decimated Meta's ad business, costing $10B+ in revenue.",
      events: [
        { year: 2021, text: "iOS 14.5 ATT prompt costs Meta ~$10B in ad revenue" },
        { year: 2022, text: "Meta stock drops 65%, partly blamed on Apple's privacy changes" },
        { year: 2023, text: "Apple Vision Pro vs Meta Quest VR headset rivalry begins" },
        { year: 2024, text: "Zuckerberg publicly criticizes Apple's closed ecosystem" }
      ]},
    { source: "apple", target: "samsung", type: "frenemy", strength: 4, startYear: 2011, endYear: null,
      summary: "Samsung makes iPhone components while competing fiercely in smartphones. Sued each other over patents for years.",
      events: [
        { year: 2011, text: "Apple sues Samsung for copying iPhone design \u2014 $1B verdict" },
        { year: 2012, text: "Samsung Galaxy S III outsells iPhone for first time" },
        { year: 2018, text: "Final patent settlement after 7 years of litigation" },
        { year: 2024, text: "Samsung still makes OLED displays for iPhone" }
      ]},
    { source: "apple", target: "epic", type: "lawsuit", strength: 4, startYear: 2020, endYear: null,
      summary: "Epic challenged Apple's 30% App Store commission in a landmark antitrust case.",
      events: [
        { year: 2020, text: "Epic bypasses App Store payments in Fortnite \u2014 Apple removes it" },
        { year: 2021, text: "Epic v Apple trial \u2014 judge rules mostly for Apple" },
        { year: 2024, text: "EU DMA forces Apple to allow alternative app stores" }
      ]},
    { source: "apple", target: "spotify", type: "rival", strength: 3, startYear: 2015, endYear: null,
      summary: "Spotify is Apple Music's fiercest competitor and most vocal critic of the App Store's 30% commission.",
      events: [
        { year: 2015, text: "Apple Music launches \u2014 direct Spotify competitor" },
        { year: 2019, text: "Spotify files EU antitrust complaint against Apple" },
        { year: 2024, text: "EU fines Apple \u20AC1.8B over music streaming antitrust" }
      ]},
    { source: "google", target: "oracle", type: "lawsuit", strength: 5, startYear: 2010, endYear: 2021,
      summary: "Oracle sued Google for using Java APIs in Android. Decade-long battle ending at the Supreme Court, which ruled 6-2 for Google.",
      events: [
        { year: 2010, text: "Oracle sues Google for $9.3B over Java API use in Android" },
        { year: 2012, text: "Jury finds APIs not copyrightable \u2014 Oracle appeals" },
        { year: 2018, text: "Appeals court rules for Oracle \u2014 Google appeals to Supreme Court" },
        { year: 2021, text: "Supreme Court rules 6-2 that Google's API use was fair use" }
      ]},
    { source: "meta", target: "tiktok", type: "rival", strength: 5, startYear: 2018, endYear: null,
      summary: "TikTok's explosive growth terrified Meta, which launched Reels and lobbied against TikTok.",
      events: [
        { year: 2018, text: "TikTok merges with Musical.ly \u2014 rapid US growth begins" },
        { year: 2020, text: "Instagram launches Reels as direct TikTok clone" },
        { year: 2022, text: "Internal Meta docs show panic over TikTok engagement" },
        { year: 2024, text: "TikTok faces potential US ban \u2014 Meta stands to benefit most" }
      ]},
    { source: "meta", target: "snap", type: "rival", strength: 4, startYear: 2013, endYear: null,
      summary: "Facebook tried to buy Snapchat for $3B. After rejection, systematically copied its features.",
      events: [
        { year: 2013, text: "Zuckerberg offers $3B for Snapchat \u2014 Spiegel declines" },
        { year: 2016, text: "Instagram copies Snapchat Stories \u2014 huge success" },
        { year: 2017, text: "WhatsApp, Facebook, Messenger all add Stories" },
        { year: 2021, text: "Snap rebounds with AR innovations Meta can't easily copy" }
      ]},
    { source: "uber", target: "lyft", type: "rival", strength: 4, startYear: 2012, endYear: null,
      summary: "The original ride-hailing war. Uber went global, Lyft stayed US-focused. Both survived to profitability.",
      events: [
        { year: 2012, text: "Lyft launches as competitor to Uber" },
        { year: 2014, text: "Uber allegedly uses dirty tactics against Lyft drivers" },
        { year: 2017, text: "#DeleteUber movement drives riders to Lyft" },
        { year: 2023, text: "Both companies finally achieve sustained profitability" }
      ]},
    { source: "nvidia", target: "amd", type: "rival", strength: 4, startYear: 2006, endYear: null,
      summary: "GPU rivals for decades. NVIDIA dominates AI training while AMD challenges with competitive gaming and datacenter GPUs.",
      events: [
        { year: 2006, text: "AMD acquires ATI \u2014 enters GPU market directly" },
        { year: 2020, text: "AMD RDNA 2 competitive with NVIDIA in gaming" },
        { year: 2023, text: "AMD MI300X aims to challenge NVIDIA H100 in AI" },
        { year: 2024, text: "NVIDIA holds 80%+ AI training market" }
      ]},
    { source: "nvidia", target: "intel", type: "rival", strength: 3, startYear: 2020, endYear: null,
      summary: "Intel's failure to pivot to AI GPUs gave NVIDIA a massive lead.",
      events: [
        { year: 2020, text: "NVIDIA surpasses Intel as most valuable US chipmaker" },
        { year: 2022, text: "Intel launches Arc GPUs \u2014 struggles with adoption" },
        { year: 2024, text: "NVIDIA worth $3T+, Intel worth $100B" }
      ]},
    { source: "amazon", target: "google", type: "rival", strength: 3, startYear: 2014, endYear: null,
      summary: "Cloud computing war: AWS vs GCP. Plus smart home rivalry and advertising competition.",
      events: [
        { year: 2014, text: "Google Cloud Platform launches enterprise push against AWS" },
        { year: 2017, text: "Amazon pulls YouTube from Fire TV \u2014 Google retaliates" },
        { year: 2024, text: "AWS leads cloud with 31% share, Google at 12%" }
      ]},
    { source: "amazon", target: "microsoft", type: "rival", strength: 4, startYear: 2010, endYear: null,
      summary: "The great cloud war. AWS pioneered cloud computing but Azure closed the gap under Nadella.",
      events: [
        { year: 2010, text: "Azure launches \u2014 begins chase of AWS" },
        { year: 2019, text: "Microsoft wins $10B JEDI contract \u2014 Amazon sues" },
        { year: 2022, text: "Azure reaches 23% cloud share vs AWS 32%" },
        { year: 2024, text: "Both compete for AI cloud workloads" }
      ]},
    { source: "stripe", target: "block", type: "rival", strength: 3, startYear: 2013, endYear: null,
      summary: "Stripe dominates developer APIs and e-commerce, Block/Square dominates in-person POS and consumer fintech.",
      events: [
        { year: 2013, text: "Both companies expanding rapidly in payments" },
        { year: 2020, text: "COVID accelerates online payments \u2014 Stripe surges" },
        { year: 2023, text: "Stripe valued at $50B+, Block at $40B+" }
      ]},
    { source: "openai", target: "anthropic", type: "rival", strength: 4, startYear: 2021, endYear: null,
      summary: "Anthropic was founded by ex-OpenAI researchers who disagreed on safety approach. Now the two leading AI labs.",
      events: [
        { year: 2021, text: "Dario Amodei leaves OpenAI, founds Anthropic" },
        { year: 2023, text: "Anthropic launches Claude \u2014 direct ChatGPT competitor" },
        { year: 2024, text: "Both valued at $100B+ \u2014 the AI duopoly" },
        { year: 2025, text: "Claude and GPT compete across coding, reasoning, enterprise" }
      ]},
    { source: "openai", target: "google", type: "rival", strength: 5, startYear: 2022, endYear: null,
      summary: "ChatGPT shocked Google \u2014 a 'code red' moment. Google rushed Bard/Gemini to market.",
      events: [
        { year: 2022, text: "ChatGPT launches \u2014 Google declares internal 'code red'" },
        { year: 2023, text: "Google rushes Bard launch \u2014 embarrassing demo error" },
        { year: 2024, text: "Gemini vs GPT-4 rivalry intensifies" },
        { year: 2025, text: "Google AI search threatens OpenAI's consumer position" }
      ]},
    { source: "snowflake", target: "databricks", type: "rival", strength: 4, startYear: 2018, endYear: null,
      summary: "The modern data stack war. Snowflake championed the data warehouse, Databricks the lakehouse.",
      events: [
        { year: 2018, text: "Databricks pushes lakehouse vs Snowflake's warehouse" },
        { year: 2020, text: "Snowflake IPO \u2014 largest software IPO ever at the time" },
        { year: 2023, text: "Both add AI/ML features \u2014 converging architectures" }
      ]},
    { source: "tesla", target: "uber", type: "rival", strength: 2, startYear: 2019, endYear: null,
      summary: "Tesla's robotaxi ambitions threaten Uber's entire business model.",
      events: [
        { year: 2019, text: "Musk announces Tesla robotaxi network plan" },
        { year: 2024, text: "Tesla unveils Cybercab robotaxi concept" },
        { year: 2025, text: "Tesla begins limited FSD robotaxi pilot in Austin" }
      ]},
    { source: "meta", target: "google", type: "rival", strength: 3, startYear: 2010, endYear: null,
      summary: "Digital advertising duopoly rivalry. Together they control 50%+ of global ad spend.",
      events: [
        { year: 2010, text: "Facebook challenges Google in display advertising" },
        { year: 2017, text: "Duopoly controls 60%+ of US digital ad market" },
        { year: 2023, text: "Meta's Llama open-source AI vs Google's Gemini" }
      ]},
    { source: "microsoft", target: "openai", type: "investor", strength: 5, startYear: 2019, endYear: null,
      summary: "Microsoft invested $13B+ in OpenAI. The most consequential AI partnership.",
      events: [
        { year: 2019, text: "Microsoft invests $1B in OpenAI" },
        { year: 2023, text: "Microsoft invests additional $10B" },
        { year: 2023, text: "OpenAI board fires Altman \u2014 Microsoft offers him a job" },
        { year: 2024, text: "Copilot products powered by GPT generate billions" },
        { year: 2025, text: "OpenAI restructures \u2014 Microsoft retains key rights" }
      ]},
    { source: "google", target: "anthropic", type: "investor", strength: 4, startYear: 2022, endYear: null,
      summary: "Google invested $2B+ in Anthropic as a counterweight to Microsoft-OpenAI. Claude runs on Google Cloud.",
      events: [
        { year: 2022, text: "Google invests $300M in Anthropic" },
        { year: 2023, text: "Google commits up to $2B more \u2014 Claude runs on GCP" },
        { year: 2024, text: "Anthropic becomes Google's key AI partner and hedge" }
      ]},
    { source: "amazon", target: "anthropic", type: "investor", strength: 4, startYear: 2023, endYear: null,
      summary: "Amazon invested up to $4B in Anthropic. Claude available on AWS Bedrock. Amazon's largest venture investment.",
      events: [
        { year: 2023, text: "Amazon invests $1.25B initially in Anthropic" },
        { year: 2023, text: "Amazon commits up to $4B total \u2014 Claude on AWS Bedrock" },
        { year: 2024, text: "Anthropic becomes centerpiece of Amazon's AI strategy" }
      ]},
    { source: "nvidia", target: "openai", type: "ally", strength: 4, startYear: 2016, endYear: null,
      summary: "NVIDIA's GPUs power OpenAI's training. The hardware-software alliance driving the AI revolution.",
      events: [
        { year: 2016, text: "Jensen Huang personally delivers first DGX-1 to OpenAI" },
        { year: 2023, text: "OpenAI among largest buyers of H100 GPUs" },
        { year: 2024, text: "Mutual dependency \u2014 OpenAI needs chips, NVIDIA needs demand" }
      ]},
    { source: "nvidia", target: "tsmc", type: "ally", strength: 5, startYear: 1998, endYear: null,
      summary: "NVIDIA designs chips, TSMC manufactures them. A foundational fabless-foundry partnership.",
      events: [
        { year: 1998, text: "NVIDIA begins outsourcing chip manufacturing to TSMC" },
        { year: 2020, text: "TSMC 7nm process enables NVIDIA's A100 breakthrough" },
        { year: 2024, text: "TSMC 4nm powers H100/H200 \u2014 supply constraints limit NVIDIA" }
      ]},
    { source: "apple", target: "tsmc", type: "ally", strength: 5, startYear: 2014, endYear: null,
      summary: "Apple is TSMC's single largest customer. All Apple Silicon is manufactured exclusively by TSMC.",
      events: [
        { year: 2014, text: "Apple switches from Samsung to TSMC for A8 chip" },
        { year: 2020, text: "TSMC 5nm enables game-changing M1 Apple Silicon" },
        { year: 2024, text: "Apple first customer for TSMC's bleeding-edge 3nm process" }
      ]},
    { source: "apple", target: "qualcomm", type: "frenemy", strength: 3, startYear: 2017, endYear: null,
      summary: "Apple sued Qualcomm over modem licensing, then settled and kept using Qualcomm modems while developing its own.",
      events: [
        { year: 2017, text: "Apple sues Qualcomm for $1B over unfair licensing" },
        { year: 2019, text: "Surprise settlement \u2014 Apple signs 6-year chip deal" },
        { year: 2024, text: "Apple developing own 5G modem to replace Qualcomm" }
      ]},
    { source: "google", target: "deepmind", type: "acquirer", strength: 5, startYear: 2014, endYear: null,
      summary: "Google acquired DeepMind for $500M. DeepMind created AlphaGo, AlphaFold, and now powers Google's most advanced AI research.",
      events: [
        { year: 2014, text: "Google acquires DeepMind for ~$500M" },
        { year: 2016, text: "AlphaGo defeats world Go champion" },
        { year: 2020, text: "AlphaFold solves protein folding" },
        { year: 2023, text: "DeepMind merges with Google Brain into Google DeepMind" }
      ]},
    { source: "tesla", target: "spacex", type: "ally", strength: 3, startYear: 2003, endYear: null,
      summary: "Both Elon Musk companies share engineering talent and innovations. Starlink powers some Tesla connectivity.",
      events: [
        { year: 2003, text: "Musk founds SpaceX while investing in Tesla" },
        { year: 2022, text: "SpaceX Starlink integrated into Tesla vehicles" },
        { year: 2024, text: "Shared AI team between Tesla, xAI, and SpaceX" }
      ]},
    { source: "twitter", target: "meta", type: "rival", strength: 3, startYear: 2023, endYear: null,
      summary: "Meta launched Threads as a direct Twitter/X competitor. Zuckerberg and Musk traded public insults.",
      events: [
        { year: 2023, text: "Meta launches Threads \u2014 gains 100M users in days" },
        { year: 2023, text: "Musk and Zuckerberg challenge each other to cage match" },
        { year: 2024, text: "Threads slowly grows while X loses advertisers" }
      ]},
    { source: "oracle", target: "amazon", type: "rival", strength: 3, startYear: 2018, endYear: null,
      summary: "Oracle and Amazon compete in cloud infrastructure and databases. Ellison famously mocks AWS.",
      events: [
        { year: 2018, text: "Amazon moves off Oracle databases \u2014 Ellison mocks them" },
        { year: 2019, text: "Oracle Cloud Infrastructure pushes for enterprise workloads" },
        { year: 2024, text: "Oracle Cloud growing fastest among cloud providers" }
      ]},
    { source: "nvidia", target: "arm", type: "frenemy", strength: 3, startYear: 2020, endYear: null,
      summary: "NVIDIA tried to buy Arm for $40B but regulators blocked it. Now compete in some markets while licensing Arm IP.",
      events: [
        { year: 2020, text: "NVIDIA announces $40B Arm acquisition from SoftBank" },
        { year: 2022, text: "Deal collapses under regulatory pressure" },
        { year: 2023, text: "Arm IPOs independently \u2014 NVIDIA remains licensee" }
      ]},
    { source: "meta", target: "nvidia", type: "ally", strength: 3, startYear: 2023, endYear: null,
      summary: "Meta is one of NVIDIA's largest GPU customers for AI training. Llama models require massive GPU clusters.",
      events: [
        { year: 2023, text: "Meta orders 350,000+ NVIDIA H100 GPUs for Llama training" },
        { year: 2024, text: "Meta plans $35B+ capex \u2014 much going to NVIDIA" }
      ]},
    { source: "apple", target: "arm", type: "ally", strength: 4, startYear: 2008, endYear: null,
      summary: "All Apple Silicon is based on Arm architecture. Apple helped prove Arm chips could compete with x86.",
      events: [
        { year: 2008, text: "iPhone uses Arm-based chips" },
        { year: 2020, text: "Apple M1 proves Arm can beat Intel x86 in laptops" },
        { year: 2024, text: "Apple's Arm-based chips dominate mobile and threaten PCs" }
      ]},
    { source: "intel", target: "amd", type: "rival", strength: 4, startYear: 2003, endYear: null,
      summary: "Decades-long CPU rivalry. AMD surpassed Intel with Ryzen/EPYC under Lisa Su.",
      events: [
        { year: 2003, text: "AMD launches Athlon 64 \u2014 first 64-bit consumer CPU" },
        { year: 2017, text: "AMD Ryzen disrupts Intel's CPU dominance" },
        { year: 2022, text: "AMD EPYC takes significant datacenter market share" },
        { year: 2024, text: "Intel struggles with manufacturing \u2014 AMD leads" }
      ]},
    { source: "uber", target: "waymo", type: "lawsuit", strength: 3, startYear: 2017, endYear: 2018,
      summary: "Waymo sued Uber for stealing self-driving car trade secrets. Settled for $245M in equity.",
      events: [
        { year: 2017, text: "Waymo sues Uber \u2014 alleges Levandowski stole 14K files" },
        { year: 2018, text: "Settlement: Uber gives Waymo $245M in equity" }
      ]},
    { source: "uber", target: "waymo", type: "ally", strength: 2, startYear: 2023, endYear: null,
      summary: "In a twist, Uber partnered with Waymo to offer robotaxi rides on the Uber app.",
      events: [
        { year: 2023, text: "Uber and Waymo announce partnership for robotaxi rides" },
        { year: 2024, text: "Waymo rides available through Uber app in Phoenix" }
      ]},
    { source: "adobe", target: "apple", type: "frenemy", strength: 2, startYear: 2010, endYear: null,
      summary: "Steve Jobs killed Flash on iPhone. Now Adobe's apps depend on Apple's platforms while developing competing creative AI.",
      events: [
        { year: 2010, text: "Steve Jobs publishes 'Thoughts on Flash' \u2014 kills Flash on iOS" },
        { year: 2017, text: "Adobe fully embraces HTML5, kills Flash" },
        { year: 2024, text: "Adobe Firefly AI vs Apple's on-device AI for creative tools" }
      ]},
    { source: "broadcom", target: "google", type: "ally", strength: 3, startYear: 2016, endYear: null,
      summary: "Broadcom builds custom TPU chips for Google's AI infrastructure.",
      events: [
        { year: 2016, text: "Broadcom manufactures Google's custom TPU accelerators" },
        { year: 2024, text: "Google TPU v5 built with Broadcom \u2014 competing with NVIDIA" }
      ]},
    { source: "netflix", target: "apple", type: "rival", strength: 2, startYear: 2019, endYear: null,
      summary: "Apple TV+ launched as direct Netflix competitor. Netflix refuses to join Apple's TV app.",
      events: [
        { year: 2019, text: "Apple TV+ launches with massive content investment" },
        { year: 2020, text: "Netflix stops paying Apple's 30% App Store commission" }
      ]},
    { source: "netflix", target: "amazon", type: "rival", strength: 3, startYear: 2013, endYear: null,
      summary: "Amazon Prime Video is Netflix's biggest streaming rival. Irony: Netflix runs entirely on AWS.",
      events: [
        { year: 2013, text: "Amazon Studios begins producing original content" },
        { year: 2022, text: "Amazon acquires MGM for $8.5B" },
        { year: 2024, text: "Netflix still runs on AWS \u2014 paying rival for infrastructure" }
      ]},
    { source: "qualcomm", target: "arm", type: "lawsuit", strength: 3, startYear: 2022, endYear: null,
      summary: "Arm sued Qualcomm over licensing terms after Qualcomm acquired Nuvia.",
      events: [
        { year: 2021, text: "Qualcomm acquires chip startup Nuvia for $1.4B" },
        { year: 2022, text: "Arm sues \u2014 alleges Qualcomm can't use Nuvia's Arm license" },
        { year: 2024, text: "Jury trial \u2014 Qualcomm mostly prevails" }
      ]},
    { source: "block", target: "twitter", type: "ally", strength: 2, startYear: 2022, endYear: null,
      summary: "Jack Dorsey co-founded Twitter and led Block. He backed Musk's acquisition.",
      events: [
        { year: 2022, text: "Jack Dorsey supports Musk's Twitter acquisition" },
        { year: 2024, text: "Block and X explore crypto/payments integration" }
      ]},
    { source: "ibm", target: "oracle", type: "rival", strength: 2, startYear: 2000, endYear: null,
      summary: "Legacy enterprise rivals competing in databases, middleware, and now cloud/AI.",
      events: [
        { year: 2000, text: "Oracle DB vs IBM DB2 \u2014 the original enterprise database war" },
        { year: 2019, text: "IBM acquires Red Hat \u2014 pivots to hybrid cloud" }
      ]},
    { source: "palantir", target: "amazon", type: "ally", strength: 2, startYear: 2022, endYear: null,
      summary: "Palantir runs on AWS. Strategic alliance for defense and intelligence workloads.",
      events: [
        { year: 2022, text: "Palantir selects AWS as preferred cloud provider" },
        { year: 2024, text: "Joint solutions for defense and intelligence customers" }
      ]},
    { source: "salesforce", target: "meta", type: "ally", strength: 2, startYear: 2023, endYear: null,
      summary: "Salesforce adopted Meta's Llama for its AI products, betting on open-source AI for enterprise CRM.",
      events: [
        { year: 2023, text: "Salesforce Einstein GPT built on open-source models including Llama" },
        { year: 2024, text: "Salesforce Agentforce uses multiple AI models" }
      ]},
    { source: "microsoft", target: "meta", type: "ally", strength: 2, startYear: 2023, endYear: null,
      summary: "Collaborate on open-source AI (Llama on Azure) and VR/mixed reality interop.",
      events: [
        { year: 2023, text: "Meta's Llama 2 available on Azure" },
        { year: 2023, text: "Microsoft and Meta partner on Quest VR for enterprise" }
      ]},

    // === xAI ===
    { source: "xai", target: "openai", type: "rival", strength: 4, startYear: 2023, endYear: null,
      summary: "Musk co-founded OpenAI then left, sued it, and built xAI as a direct competitor. Deeply personal rivalry with Sam Altman.",
      events: [
        { year: 2015, text: "Musk co-founds OpenAI as non-profit" },
        { year: 2018, text: "Musk leaves OpenAI board over disagreements" },
        { year: 2023, text: "Musk founds xAI, launches Grok on X/Twitter" },
        { year: 2024, text: "Musk sues OpenAI alleging betrayal of founding mission" },
        { year: 2025, text: "xAI raises $6B+ to compete head-on with OpenAI" }
      ]},
    { source: "xai", target: "twitter", type: "acquirer", strength: 5, startYear: 2025, endYear: null,
      summary: "xAI acquired X/Twitter in March 2025 in an all-stock deal valuing X at $33B and xAI at $80B. Musk consolidated his AI and social media empires.",
      events: [
        { year: 2023, text: "Grok launches as X Premium feature" },
        { year: 2024, text: "X data used to train Grok models \u2014 privacy controversy" },
        { year: 2025, text: "xAI acquires X/Twitter \u2014 $33B valuation for X" },
        { year: 2025, text: "Linda Yaccarino resigns as X CEO in July" }
      ]},
    { source: "xai", target: "tesla", type: "ally", strength: 3, startYear: 2023, endYear: null,
      summary: "Shared engineering talent and compute resources between xAI and Tesla. Both pursuing autonomous AI systems.",
      events: [
        { year: 2024, text: "NVIDIA GPUs meant for Tesla diverted to xAI \u2014 controversy" },
        { year: 2024, text: "Shared AI researchers across Musk's companies" }
      ]},
    { source: "xai", target: "nvidia", type: "ally", strength: 3, startYear: 2023, endYear: null,
      summary: "xAI is a major NVIDIA GPU customer, building one of the world's largest AI training clusters.",
      events: [
        { year: 2024, text: "xAI builds 100K+ GPU supercluster in Memphis" },
        { year: 2025, text: "xAI among NVIDIA's top customers for H100/B200 GPUs" }
      ]},
    { source: "xai", target: "google", type: "rival", strength: 3, startYear: 2023, endYear: null,
      summary: "xAI's Grok competes with Google's Gemini. Musk frequently criticizes Google's AI safety approach.",
      events: [
        { year: 2024, text: "Musk mocks Gemini's image generation controversies" },
        { year: 2025, text: "Grok vs Gemini competition intensifies" }
      ]},
    { source: "xai", target: "anthropic", type: "rival", strength: 2, startYear: 2023, endYear: null,
      summary: "xAI competes with Anthropic in the frontier AI race. Different philosophies: Musk's move-fast vs Anthropic's safety-first.",
      events: [
        { year: 2024, text: "Grok, Claude, and GPT compete across benchmarks" }
      ]},

    // === Mistral AI ===
    { source: "mistral", target: "openai", type: "rival", strength: 3, startYear: 2023, endYear: null,
      summary: "Mistral positions as the open-weight alternative to OpenAI's closed models. Europe's answer to American AI dominance.",
      events: [
        { year: 2023, text: "Mistral 7B shocks the AI world with performance" },
        { year: 2024, text: "Mixtral MoE model competitive with GPT-3.5" },
        { year: 2025, text: "Mistral Large competes with GPT-4 class models" }
      ]},
    { source: "mistral", target: "meta", type: "ally", strength: 2, startYear: 2023, endYear: null,
      summary: "Both champion open-weight AI models. Mistral founders came partly from Meta's AI research. Philosophical allies in the open vs closed AI debate.",
      events: [
        { year: 2023, text: "Mistral and Meta both push open-weight model philosophy" },
        { year: 2024, text: "Mistral models hosted alongside Llama on major platforms" }
      ]},
    { source: "mistral", target: "microsoft", type: "investor", strength: 3, startYear: 2024, endYear: null,
      summary: "Microsoft invested in Mistral as an AI hedge alongside OpenAI. Mistral models available on Azure.",
      events: [
        { year: 2024, text: "Microsoft invests \u20AC15M in Mistral, models on Azure" },
        { year: 2024, text: "Mistral Le Chat launched as ChatGPT competitor" }
      ]},
    { source: "mistral", target: "anthropic", type: "rival", strength: 2, startYear: 2023, endYear: null,
      summary: "Both are frontier AI challengers to OpenAI, competing for enterprise and developer adoption.",
      events: [
        { year: 2024, text: "Mistral and Anthropic compete for European enterprise deals" }
      ]},

    // === Perplexity ===
    { source: "perplexity", target: "google", type: "rival", strength: 4, startYear: 2022, endYear: null,
      summary: "Perplexity is the most direct threat to Google Search in decades. AI-native search with citations replacing blue links.",
      events: [
        { year: 2022, text: "Perplexity launches AI search engine" },
        { year: 2024, text: "Perplexity reaches 10M+ monthly users \u2014 Google takes notice" },
        { year: 2025, text: "Perplexity valued at $9B+ \u2014 the Google Search challenger" }
      ]},
    { source: "perplexity", target: "openai", type: "rival", strength: 2, startYear: 2024, endYear: null,
      summary: "OpenAI launched SearchGPT competing directly with Perplexity's AI search product.",
      events: [
        { year: 2024, text: "OpenAI launches SearchGPT \u2014 direct Perplexity competitor" },
        { year: 2025, text: "ChatGPT adds web search, intensifying competition" }
      ]},
    { source: "perplexity", target: "amazon", type: "investor", strength: 2, startYear: 2024, endYear: null,
      summary: "Jeff Bezos personally invested in Perplexity. A bet against Google Search by the Amazon founder.",
      events: [
        { year: 2024, text: "Jeff Bezos invests in Perplexity \u2014 signals belief in AI search" }
      ]},

    // === Cohere ===
    { source: "cohere", target: "openai", type: "rival", strength: 3, startYear: 2021, endYear: null,
      summary: "Cohere competes with OpenAI for enterprise AI. Co-founded by Transformer paper co-author, giving it deep technical credibility.",
      events: [
        { year: 2021, text: "Cohere launches enterprise NLP API \u2014 OpenAI's enterprise rival" },
        { year: 2023, text: "Cohere Command model competes for enterprise contracts" },
        { year: 2024, text: "Cohere raises $500M at $5.5B valuation" }
      ]},
    { source: "cohere", target: "google", type: "frenemy", strength: 2, startYear: 2021, endYear: null,
      summary: "Cohere's co-founder Aidan Gomez co-authored the Transformer paper at Google. Cohere runs on Google Cloud but competes with Gemini.",
      events: [
        { year: 2021, text: "Former Google Brain researcher builds competing AI company" },
        { year: 2024, text: "Cohere available on Google Cloud while competing with Gemini" }
      ]},
    { source: "cohere", target: "nvidia", type: "ally", strength: 2, startYear: 2023, endYear: null,
      summary: "NVIDIA invested in Cohere. Partnership for enterprise AI deployment on NVIDIA hardware.",
      events: [
        { year: 2023, text: "NVIDIA invests in Cohere \u2014 enterprise AI partnership" }
      ]},

    // === Stability AI ===
    { source: "stability", target: "midjourney", type: "rival", strength: 3, startYear: 2022, endYear: null,
      summary: "The two leading AI image generation companies. Stable Diffusion is open-source, Midjourney is closed and profitable.",
      events: [
        { year: 2022, text: "Stable Diffusion launches \u2014 open-source image generation explodes" },
        { year: 2023, text: "Midjourney dominates quality, Stability dominates ecosystem" },
        { year: 2024, text: "Stability struggles financially while Midjourney thrives" }
      ]},
    { source: "stability", target: "runway", type: "rival", strength: 2, startYear: 2023, endYear: null,
      summary: "Both compete in generative AI for creative content. Stability expanding into video, challenging Runway's territory.",
      events: [
        { year: 2023, text: "Stability launches Stable Video Diffusion" },
        { year: 2024, text: "Both compete for Hollywood and creator adoption" }
      ]},

    // === Midjourney ===
    { source: "midjourney", target: "adobe", type: "rival", strength: 3, startYear: 2022, endYear: null,
      summary: "Midjourney threatens Adobe's creative tools dominance. Adobe responded with Firefly, trained on licensed content.",
      events: [
        { year: 2022, text: "Midjourney's AI art threatens traditional design workflows" },
        { year: 2023, text: "Adobe launches Firefly \u2014 'ethical' AI image generation" },
        { year: 2024, text: "Both compete for creative professional adoption" }
      ]},

    // === Hugging Face ===
    { source: "huggingface", target: "openai", type: "frenemy", strength: 3, startYear: 2022, endYear: null,
      summary: "Hugging Face hosts open-source alternatives to OpenAI's models while also hosting OpenAI-compatible tools. The open-source counterweight.",
      events: [
        { year: 2022, text: "Hugging Face becomes the hub for open-source AI models" },
        { year: 2023, text: "Platform hosts Llama, Mistral, and thousands of GPT alternatives" },
        { year: 2024, text: "Hugging Face valued at $4.5B \u2014 the anti-OpenAI infrastructure" }
      ]},
    { source: "huggingface", target: "google", type: "ally", strength: 2, startYear: 2022, endYear: null,
      summary: "Google invested in Hugging Face and integrates with Google Cloud. Strategic support for the open-source AI ecosystem.",
      events: [
        { year: 2022, text: "Google Cloud partnership for hosting models" },
        { year: 2023, text: "Google invests in Hugging Face's Series D" }
      ]},
    { source: "huggingface", target: "meta", type: "ally", strength: 3, startYear: 2023, endYear: null,
      summary: "Meta's Llama models are distributed primarily through Hugging Face. Key distribution partner for open-source AI.",
      events: [
        { year: 2023, text: "Llama 2 launch on Hugging Face drives massive adoption" },
        { year: 2024, text: "Hugging Face is the primary distribution channel for Meta's AI" }
      ]},

    // === Scale AI ===
    { source: "scale", target: "openai", type: "ally", strength: 3, startYear: 2020, endYear: null,
      summary: "Scale AI provides critical data labeling and RLHF data for OpenAI's model training. A key but often invisible AI supply chain partner.",
      events: [
        { year: 2020, text: "Scale becomes major data labeling partner for OpenAI" },
        { year: 2023, text: "Scale's RLHF data helps train GPT-4" },
        { year: 2024, text: "Scale expands into AI evaluation and testing" }
      ]},
    { source: "scale", target: "meta", type: "ally", strength: 2, startYear: 2021, endYear: null,
      summary: "Scale AI provides data services for Meta's AI training, including Llama model development.",
      events: [
        { year: 2021, text: "Scale provides data labeling for Meta's AI research" }
      ]},
    { source: "scale", target: "anthropic", type: "ally", strength: 2, startYear: 2023, endYear: null,
      summary: "Scale AI works with Anthropic on model evaluation and safety testing for Claude.",
      events: [
        { year: 2023, text: "Scale partners with Anthropic on AI safety evaluation" }
      ]},

    // === Inflection AI ===
    { source: "inflection", target: "microsoft", type: "acquirer", strength: 4, startYear: 2024, endYear: null,
      summary: "Microsoft hired most of Inflection's team including CEO Mustafa Suleyman to lead Microsoft AI. A de facto acquisition without buying the company.",
      events: [
        { year: 2022, text: "Inflection founded by DeepMind co-founder Mustafa Suleyman" },
        { year: 2023, text: "Pi chatbot launches with $1.3B in funding" },
        { year: 2024, text: "Microsoft hires Suleyman and most of Inflection's team" },
        { year: 2024, text: "Microsoft pays $650M licensing fee \u2014 acqui-hire in all but name" }
      ]},
    { source: "inflection", target: "deepmind", type: "rival", strength: 2, startYear: 2022, endYear: 2024,
      summary: "Founded by DeepMind co-founder Suleyman who left after internal conflicts. A personal split that spawned a competitor.",
      events: [
        { year: 2022, text: "Suleyman founds Inflection after leaving DeepMind/Google" },
        { year: 2024, text: "Suleyman joins Microsoft \u2014 rivalry dissolves" }
      ]},

    // === Character.AI ===
    { source: "character", target: "google", type: "frenemy", strength: 3, startYear: 2021, endYear: null,
      summary: "Founded by ex-Google researchers who invented the Transformer. Google licensed Character.AI's tech and re-hired the founders in 2024.",
      events: [
        { year: 2021, text: "Noam Shazeer leaves Google, founds Character.AI" },
        { year: 2023, text: "Character.AI becomes top AI chatbot platform for consumers" },
        { year: 2024, text: "Google pays $2.7B to license tech and re-hire founders" }
      ]},
    { source: "character", target: "openai", type: "rival", strength: 2, startYear: 2022, endYear: null,
      summary: "Character.AI competes with ChatGPT in the consumer AI chatbot space, focused on personalized AI characters.",
      events: [
        { year: 2023, text: "Character.AI and ChatGPT compete for consumer attention" }
      ]},

    // === Runway ===
    { source: "runway", target: "openai", type: "frenemy", strength: 2, startYear: 2024, endYear: null,
      summary: "OpenAI's Sora directly competes with Runway's AI video generation. But both push the frontier of generative AI for creative work.",
      events: [
        { year: 2024, text: "OpenAI announces Sora \u2014 direct threat to Runway's Gen-3" },
        { year: 2024, text: "Runway partners with entertainment studios as Sora delayed" }
      ]},
    { source: "runway", target: "google", type: "rival", strength: 2, startYear: 2024, endYear: null,
      summary: "Google's Veo video generation model competes with Runway in the AI filmmaking space.",
      events: [
        { year: 2024, text: "Google Veo launches \u2014 competing with Runway for video AI" }
      ]},

    // === Together AI / Replicate ===
    { source: "together", target: "huggingface", type: "ally", strength: 2, startYear: 2023, endYear: null,
      summary: "Both champion open-source AI infrastructure. Together AI runs models hosted on Hugging Face.",
      events: [
        { year: 2023, text: "Together AI provides compute for open-source model ecosystem" }
      ]},
    { source: "replicate", target: "stability", type: "ally", strength: 2, startYear: 2022, endYear: null,
      summary: "Replicate was an early hosting partner for Stable Diffusion, helping drive open-source image generation adoption.",
      events: [
        { year: 2022, text: "Replicate makes Stable Diffusion accessible via API" }
      ]},

    // === Mosaic ML ===
    { source: "databricksai", target: "databricks", type: "acquirer", strength: 4, startYear: 2023, endYear: null,
      summary: "Databricks acquired MosaicML for $1.3B to add AI training capabilities to its data platform.",
      events: [
        { year: 2023, text: "Databricks acquires MosaicML for $1.3B" },
        { year: 2024, text: "MosaicML tech powers Databricks' DBRX model" }
      ]},

    // === New Company Relationships ===

    // GitHub
    { source: "github", target: "microsoft", type: "acquirer", strength: 5, startYear: 2018, endYear: null,
      summary: "Microsoft acquired GitHub for $7.5B. GitHub Copilot, powered by OpenAI, became a massive revenue driver and AI coding pioneer.",
      events: [
        { year: 2018, text: "Microsoft acquires GitHub for $7.5B \u2014 developers worried" },
        { year: 2021, text: "GitHub Copilot launches \u2014 first major AI coding assistant" },
        { year: 2024, text: "Copilot generates $2B+ ARR \u2014 fastest Microsoft product ever" }
      ]},
    { source: "github", target: "openai", type: "ally", strength: 3, startYear: 2021, endYear: null,
      summary: "GitHub Copilot is powered by OpenAI's Codex models. The partnership that proved AI coding tools could work at scale.",
      events: [
        { year: 2021, text: "Copilot launches powered by OpenAI Codex" },
        { year: 2024, text: "Copilot X integrates GPT-4 for chat, PR reviews, docs" }
      ]},

    // Figma
    { source: "figma", target: "adobe", type: "rival", strength: 5, startYear: 2016, endYear: null,
      summary: "Figma disrupted Adobe's design monopoly with browser-based collaboration. Adobe tried to buy Figma for $20B but regulators killed the deal.",
      events: [
        { year: 2016, text: "Figma launches \u2014 challenges Sketch, then Adobe XD" },
        { year: 2022, text: "Adobe announces $20B Figma acquisition" },
        { year: 2023, text: "Deal collapses under UK/EU regulatory pressure" },
        { year: 2024, text: "Adobe pays $1B breakup fee \u2014 Figma stays independent" }
      ]},

    // Discord
    { source: "discord", target: "microsoft", type: "frenemy", strength: 2, startYear: 2021, endYear: null,
      summary: "Microsoft tried to buy Discord for $12B but was rejected. Now Discord competes with Teams while integrating Xbox features.",
      events: [
        { year: 2021, text: "Discord rejects Microsoft's $12B acquisition offer" },
        { year: 2022, text: "Discord integrates with Xbox \u2014 partial partnership instead" }
      ]},
    { source: "discord", target: "snap", type: "rival", strength: 2, startYear: 2020, endYear: null,
      summary: "Both compete for Gen Z social engagement. Discord's community model vs Snapchat's messaging model.",
      events: [
        { year: 2020, text: "Discord expands beyond gaming to mainstream social" }
      ]},

    // Zoom
    { source: "zoom", target: "microsoft", type: "rival", strength: 4, startYear: 2020, endYear: null,
      summary: "Zoom vs Microsoft Teams became the defining enterprise communication rivalry during COVID. Teams leveraged Office bundling while Zoom had superior UX.",
      events: [
        { year: 2020, text: "COVID makes Zoom a verb \u2014 10M to 300M daily users" },
        { year: 2020, text: "Microsoft Teams aggressively competes with Office bundling" },
        { year: 2024, text: "Both add AI features \u2014 Zoom AI Companion vs Teams Copilot" }
      ]},
    { source: "zoom", target: "google", type: "rival", strength: 2, startYear: 2020, endYear: null,
      summary: "Google Meet competes with Zoom in video conferencing, leveraging Workspace bundling.",
      events: [
        { year: 2020, text: "Google makes Meet free \u2014 competing with Zoom during COVID" }
      ]},
    { source: "zoom", target: "salesforce", type: "rival", strength: 2, startYear: 2021, endYear: null,
      summary: "Salesforce acquired Slack to compete with Zoom/Teams. Now Zoom and Slack compete in workplace collaboration.",
      events: [
        { year: 2021, text: "Salesforce acquires Slack for $27.7B \u2014 enters collaboration wars" }
      ]},

    // Shopify
    { source: "shopify", target: "amazon", type: "rival", strength: 4, startYear: 2015, endYear: null,
      summary: "Shopify empowers merchants to own their sales channels vs Amazon's marketplace model. The 'arm the rebels' counter to Amazon's empire.",
      events: [
        { year: 2015, text: "Shopify IPO \u2014 positions as Amazon alternative for merchants" },
        { year: 2020, text: "COVID e-commerce boom lifts both \u2014 Shopify grows 96%" },
        { year: 2024, text: "Shopify powers 10%+ of US e-commerce" }
      ]},
    { source: "shopify", target: "stripe", type: "ally", strength: 3, startYear: 2016, endYear: null,
      summary: "Stripe powers Shopify's payments infrastructure. Shopify Payments is built on Stripe, making them deeply integrated partners.",
      events: [
        { year: 2016, text: "Shopify Payments launches powered by Stripe" },
        { year: 2024, text: "Stripe processes majority of Shopify's payment volume" }
      ]},

    // Cloudflare
    { source: "cloudflare", target: "amazon", type: "rival", strength: 3, startYear: 2018, endYear: null,
      summary: "Cloudflare's R2 storage directly undercuts AWS S3 pricing by eliminating egress fees. A bold attack on Amazon's cloud cash cow.",
      events: [
        { year: 2018, text: "Cloudflare Workers challenges AWS Lambda for edge compute" },
        { year: 2022, text: "Cloudflare R2 launches \u2014 zero egress fees vs AWS S3" },
        { year: 2024, text: "Cloudflare AI Workers compete with AWS for inference workloads" }
      ]},
    { source: "cloudflare", target: "google", type: "rival", strength: 2, startYear: 2020, endYear: null,
      summary: "Cloudflare competes with Google Cloud CDN and edge computing. Also challenges Google's web security services.",
      events: [
        { year: 2024, text: "Cloudflare and Google compete for edge computing workloads" }
      ]},

    // PayPal
    { source: "paypal", target: "stripe", type: "rival", strength: 4, startYear: 2011, endYear: null,
      summary: "Stripe disrupted PayPal's dominance in online payments with developer-friendly APIs. PayPal had the market; Stripe took the developers.",
      events: [
        { year: 2011, text: "Stripe launches with simple API \u2014 developer love at first sight" },
        { year: 2020, text: "Stripe surpasses PayPal in developer preference" },
        { year: 2024, text: "PayPal fights back with revamped checkout and crypto integration" }
      ]},
    { source: "paypal", target: "block", type: "rival", strength: 3, startYear: 2013, endYear: null,
      summary: "PayPal and Square (Block) compete in payments, POS, and consumer fintech. Venmo vs Cash App is the consumer battleground.",
      events: [
        { year: 2013, text: "Venmo growth challenges Cash App" },
        { year: 2021, text: "Both add crypto trading and Buy Now Pay Later" },
        { year: 2024, text: "Venmo vs Cash App \u2014 peer payment rivalry continues" }
      ]},
    { source: "paypal", target: "apple", type: "rival", strength: 2, startYear: 2014, endYear: null,
      summary: "Apple Pay threatens PayPal's consumer payments position with seamless hardware integration.",
      events: [
        { year: 2014, text: "Apple Pay launches \u2014 NFC payments bypass PayPal" },
        { year: 2024, text: "Apple Pay Later competes with PayPal's BNPL offerings" }
      ]},

    // Coinbase
    { source: "coinbase", target: "block", type: "rival", strength: 3, startYear: 2018, endYear: null,
      summary: "Both are major crypto platforms but with different approaches. Coinbase is an exchange; Block builds Bitcoin infrastructure.",
      events: [
        { year: 2018, text: "Both companies become faces of US crypto industry" },
        { year: 2021, text: "Coinbase IPOs at $86B \u2014 crypto goes mainstream" },
        { year: 2024, text: "Jack Dorsey's Bitcoin maximalism vs Coinbase's multi-chain approach" }
      ]},

    // Reddit
    { source: "reddit", target: "google", type: "ally", strength: 3, startYear: 2024, endYear: null,
      summary: "Google signed $60M/year deal to use Reddit data for AI training. Reddit's content became a key AI training resource.",
      events: [
        { year: 2024, text: "Google pays Reddit $60M/year for AI training data" },
        { year: 2024, text: "Reddit IPO \u2014 AI data deals boost valuation" }
      ]},
    { source: "reddit", target: "openai", type: "ally", strength: 2, startYear: 2024, endYear: null,
      summary: "Reddit signed deal with OpenAI for AI training data access, similar to the Google partnership.",
      events: [
        { year: 2024, text: "OpenAI signs data licensing deal with Reddit" }
      ]},

    // Rivian
    { source: "rivian", target: "amazon", type: "investor", strength: 4, startYear: 2019, endYear: null,
      summary: "Amazon invested $1.3B+ in Rivian and ordered 100K electric delivery vans. Amazon's biggest bet on electrifying its logistics fleet.",
      events: [
        { year: 2019, text: "Amazon leads $700M investment in Rivian" },
        { year: 2021, text: "Rivian IPO at $66B \u2014 briefly worth more than Ford" },
        { year: 2024, text: "Amazon delivery vans rolling out \u2014 10K+ on the road" }
      ]},
    { source: "rivian", target: "tesla", type: "rival", strength: 3, startYear: 2021, endYear: null,
      summary: "Rivian's R1T was the first electric pickup truck to market, beating Tesla's Cybertruck by two years.",
      events: [
        { year: 2021, text: "R1T launches \u2014 first electric pickup truck to ship" },
        { year: 2023, text: "Tesla Cybertruck finally ships \u2014 direct competitor" },
        { year: 2024, text: "Rivian struggles with production costs vs Tesla's scale" }
      ]},

    // DoorDash
    { source: "doordash", target: "uber", type: "rival", strength: 4, startYear: 2018, endYear: null,
      summary: "DoorDash overtook Uber Eats to become the #1 US food delivery platform with 65%+ market share.",
      events: [
        { year: 2018, text: "DoorDash begins overtaking Uber Eats in US market share" },
        { year: 2020, text: "COVID delivery boom \u2014 DoorDash IPOs at $72B" },
        { year: 2024, text: "DoorDash holds 67% US delivery share vs Uber Eats 23%" }
      ]},

    // CrowdStrike
    { source: "crowdstrike", target: "microsoft", type: "rival", strength: 3, startYear: 2019, endYear: null,
      summary: "CrowdStrike competes with Microsoft Defender for endpoint security. The July 2024 global outage was caused by a CrowdStrike update crashing Windows.",
      events: [
        { year: 2019, text: "CrowdStrike IPO \u2014 challenges Microsoft in endpoint security" },
        { year: 2024, text: "Faulty CrowdStrike update causes global Windows outage \u2014 8.5M PCs crash" },
        { year: 2024, text: "Microsoft and CrowdStrike blame each other for kernel access issues" }
      ]},

    // ServiceNow
    { source: "servicenow", target: "salesforce", type: "rival", strength: 3, startYear: 2018, endYear: null,
      summary: "Both compete in enterprise workflow automation and AI agents. ServiceNow's platform threatens Salesforce's enterprise dominance.",
      events: [
        { year: 2018, text: "ServiceNow surpasses $200B market cap \u2014 enterprise darling" },
        { year: 2024, text: "Both launch AI agent platforms competing for enterprise automation" }
      ]},

    // Cisco
    { source: "cisco", target: "microsoft", type: "rival", strength: 2, startYear: 2017, endYear: null,
      summary: "Cisco's Webex competes with Microsoft Teams in enterprise communications. Cisco also competes in networking security.",
      events: [
        { year: 2017, text: "Webex vs Teams rivalry intensifies in enterprise" },
        { year: 2024, text: "Cisco acquires Splunk for $28B \u2014 pivots to security + observability" }
      ]},

    // Notion
    { source: "notion", target: "microsoft", type: "rival", strength: 2, startYear: 2020, endYear: null,
      summary: "Notion challenges Microsoft's Office/Teams dominance in workplace productivity with a more flexible, modern approach.",
      events: [
        { year: 2020, text: "Notion's popularity surges \u2014 threatens Microsoft Office for startups" },
        { year: 2024, text: "Notion AI competes with Microsoft Copilot for productivity AI" }
      ]},
    { source: "notion", target: "salesforce", type: "rival", strength: 2, startYear: 2021, endYear: null,
      summary: "Notion competes with Salesforce's Slack and Quip in the workplace collaboration space.",
      events: [
        { year: 2021, text: "Notion's wiki/docs threaten Slack/Quip in enterprise" }
      ]},

    // Pinterest
    { source: "pinterest", target: "meta", type: "rival", strength: 2, startYear: 2012, endYear: null,
      summary: "Pinterest competes with Instagram for visual content and social commerce. Pinterest's shopping focus differentiates from Meta's ad model.",
      events: [
        { year: 2012, text: "Pinterest grows as visual discovery alternative to Facebook" },
        { year: 2023, text: "Pinterest pivots to shopping \u2014 differentiates from Instagram" }
      ]},
    { source: "pinterest", target: "google", type: "frenemy", strength: 2, startYear: 2017, endYear: null,
      summary: "Pinterest competes with Google Images in visual search but relies on Google for traffic. Classic frenemy dynamic.",
      events: [
        { year: 2017, text: "Pinterest Lens visual search challenges Google Images" },
        { year: 2024, text: "Pinterest depends on Google SEO traffic while competing in visual search" }
      ]},

    // Robinhood
    { source: "robinhood", target: "coinbase", type: "rival", strength: 3, startYear: 2018, endYear: null,
      summary: "Both compete for retail crypto and stock trading. Robinhood added crypto; Coinbase is expanding into traditional finance.",
      events: [
        { year: 2018, text: "Robinhood adds crypto trading \u2014 challenges Coinbase" },
        { year: 2021, text: "GameStop saga makes Robinhood infamous \u2014 halts trading" },
        { year: 2024, text: "Both compete for next-gen retail investor" }
      ]},

    // MongoDB
    { source: "mongodb", target: "amazon", type: "frenemy", strength: 3, startYear: 2019, endYear: null,
      summary: "AWS launched DocumentDB, a MongoDB-compatible database, without contributing back. MongoDB changed its license in response.",
      events: [
        { year: 2019, text: "AWS launches DocumentDB \u2014 MongoDB clone sparks open-source licensing war" },
        { year: 2019, text: "MongoDB switches to SSPL license to prevent cloud providers from free-riding" },
        { year: 2024, text: "MongoDB Atlas competes directly with AWS database services" }
      ]},

    // === Missing Relationships Between Existing Companies ===

    // Salesforce acquisitions
    { source: "salesforce", target: "microsoft", type: "rival", strength: 3, startYear: 2016, endYear: null,
      summary: "CRM rivals that fought over LinkedIn (Microsoft won at $26B). Now compete in AI agents, enterprise AI, and productivity suites.",
      events: [
        { year: 2016, text: "Both bid for LinkedIn \u2014 Microsoft wins at $26.2B" },
        { year: 2021, text: "Salesforce acquires Slack to compete with Microsoft Teams" },
        { year: 2024, text: "Salesforce Agentforce vs Microsoft Copilot for enterprise AI" }
      ]},

    // Oracle + OpenAI
    { source: "oracle", target: "openai", type: "ally", strength: 3, startYear: 2024, endYear: null,
      summary: "Oracle became a key cloud partner for OpenAI, providing infrastructure for Stargate AI supercomputer project.",
      events: [
        { year: 2024, text: "Oracle joins Stargate project \u2014 $500B AI infrastructure initiative" },
        { year: 2025, text: "Oracle Cloud hosts OpenAI training workloads alongside Azure" }
      ]},

    // Apple + Google AI deal
    { source: "apple", target: "openai", type: "ally", strength: 3, startYear: 2024, endYear: null,
      summary: "Apple integrated ChatGPT into Apple Intelligence and Siri. A surprising partnership born from Apple's AI catch-up scramble.",
      events: [
        { year: 2024, text: "Apple announces ChatGPT integration in iOS 18 / Apple Intelligence" },
        { year: 2025, text: "Siri powered by ChatGPT for complex queries" }
      ]},

    // Meta open-source AI strategy
    { source: "meta", target: "openai", type: "rival", strength: 3, startYear: 2023, endYear: null,
      summary: "Meta's Llama open-source strategy directly challenges OpenAI's closed model approach. Zuckerberg vs Altman on AI's future.",
      events: [
        { year: 2023, text: "Meta releases Llama 2 open-source \u2014 undermines OpenAI's moat" },
        { year: 2024, text: "Llama 3 competitive with GPT-4 \u2014 free vs paid" },
        { year: 2025, text: "Zuckerberg frames open-source as counter to OpenAI/Google duopoly" }
      ]},

    // Meta + Anthropic
    { source: "meta", target: "anthropic", type: "rival", strength: 2, startYear: 2023, endYear: null,
      summary: "Meta's Llama competes with Claude for developer and enterprise adoption. Open-source vs safety-first philosophies.",
      events: [
        { year: 2024, text: "Llama 3 vs Claude 3 \u2014 competing across benchmarks" }
      ]},

    // Twitter/X + Musk empire
    { source: "twitter", target: "tesla", type: "ally", strength: 2, startYear: 2022, endYear: null,
      summary: "Musk's ownership of both X and Tesla creates synergies and conflicts. Tesla investors worry about Musk's X distraction.",
      events: [
        { year: 2022, text: "Musk acquires Twitter \u2014 Tesla stock drops on distraction fears" },
        { year: 2024, text: "X promotes Tesla content while investors question Musk's focus" }
      ]},

    // Anthropic + Claude coding
    { source: "anthropic", target: "google", type: "frenemy", strength: 3, startYear: 2022, endYear: null,
      summary: "Google invested $2B+ in Anthropic but Claude competes directly with Gemini. Google funds its own competitor as an OpenAI hedge.",
      events: [
        { year: 2022, text: "Google invests in Anthropic while building competing Gemini" },
        { year: 2024, text: "Claude and Gemini compete \u2014 despite Google being an investor" },
        { year: 2025, text: "Anthropic becomes Google's strategic hedge against OpenAI dominance" }
      ]},

    // NVIDIA as AI kingmaker
    { source: "nvidia", target: "anthropic", type: "ally", strength: 3, startYear: 2023, endYear: null,
      summary: "Anthropic is a major NVIDIA GPU customer for training Claude models. NVIDIA benefits from every AI lab needing more chips.",
      events: [
        { year: 2023, text: "Anthropic among major buyers of NVIDIA H100 GPUs" },
        { year: 2024, text: "NVIDIA profits from the OpenAI-Anthropic-Google AI arms race" }
      ]},

    // Amazon ecosystem
    { source: "amazon", target: "shopify", type: "rival", strength: 3, startYear: 2015, endYear: null,
      summary: "Amazon's marketplace model vs Shopify's merchant empowerment. Shopify helps small businesses compete against Amazon's dominance.",
      events: [
        { year: 2015, text: "Shopify positions as the anti-Amazon for independent merchants" },
        { year: 2024, text: "Buy with Prime attempts to bring Amazon into Shopify stores" }
      ]},

    // Palantir + government AI
    { source: "palantir", target: "microsoft", type: "rival", strength: 2, startYear: 2022, endYear: null,
      summary: "Both compete for lucrative US government AI and defense contracts. Palantir's defense focus vs Microsoft's broader government cloud.",
      events: [
        { year: 2022, text: "Both compete for Pentagon AI contracts" },
        { year: 2024, text: "Palantir AIP vs Microsoft Azure Government for defense AI" }
      ]},

    // Broadcom + VMware
    { source: "broadcom", target: "ibm", type: "rival", strength: 2, startYear: 2023, endYear: null,
      summary: "Broadcom's $69B VMware acquisition puts it in direct competition with IBM's Red Hat for enterprise virtualization and hybrid cloud.",
      events: [
        { year: 2023, text: "Broadcom completes $69B VMware acquisition" },
        { year: 2024, text: "VMware vs Red Hat for enterprise hybrid cloud" }
      ]},

    // Airbnb
    { source: "airbnb", target: "uber", type: "ally", strength: 2, startYear: 2015, endYear: null,
      summary: "Both disrupted traditional industries (hospitality and transport) using the sharing economy model. Cultural and strategic allies.",
      events: [
        { year: 2015, text: "Both become poster children of the sharing economy" },
        { year: 2023, text: "Both achieve sustained profitability after years of losses" }
      ]},

    // === AI Coding ===
    { source: "cursor", target: "github", type: "rival", strength: 4, startYear: 2023, endYear: null,
      summary: "Cursor directly challenges GitHub Copilot as the AI coding tool of choice. Cursor offers a full AI-native editor vs Copilot as a VS Code plugin.",
      events: [
        { year: 2023, text: "Cursor launches AI-native code editor \u2014 developers switch from VS Code + Copilot" },
        { year: 2024, text: "Cursor hits $100M+ ARR \u2014 fastest dev tool growth ever" },
        { year: 2025, text: "Cursor vs Copilot becomes the defining AI coding rivalry" }
      ]},
    { source: "cursor", target: "openai", type: "ally", strength: 3, startYear: 2023, endYear: null,
      summary: "Cursor uses OpenAI's models (GPT-4, o1) as part of its multi-model approach to AI coding.",
      events: [
        { year: 2023, text: "Cursor integrates GPT-4 for code generation" },
        { year: 2024, text: "Cursor uses mix of OpenAI, Anthropic, and custom models" }
      ]},
    { source: "cursor", target: "anthropic", type: "ally", strength: 3, startYear: 2024, endYear: null,
      summary: "Cursor integrates Claude as a primary coding model. Many developers prefer Claude's coding abilities within Cursor.",
      events: [
        { year: 2024, text: "Claude becomes a preferred model choice in Cursor" },
        { year: 2025, text: "Claude Code competes with Cursor for AI-native development" }
      ]},
    { source: "cognition", target: "github", type: "rival", strength: 3, startYear: 2024, endYear: null,
      summary: "Devin positions as a fully autonomous AI software engineer vs Copilot's assistant model. Different vision of AI's role in coding.",
      events: [
        { year: 2024, text: "Devin demo claims fully autonomous coding \u2014 sparks debate" },
        { year: 2024, text: "GitHub responds with Copilot Workspace for multi-file tasks" }
      ]},
    { source: "cognition", target: "cursor", type: "rival", strength: 3, startYear: 2024, endYear: null,
      summary: "Devin's autonomous approach competes with Cursor's human-in-the-loop philosophy for AI-assisted development.",
      events: [
        { year: 2024, text: "Devin (autonomous) vs Cursor (augmented) \u2014 two visions of AI coding" }
      ]},
    { source: "poolside", target: "openai", type: "rival", strength: 2, startYear: 2024, endYear: null,
      summary: "Poolside is training code-specific models to compete with OpenAI's general-purpose models for software engineering tasks.",
      events: [
        { year: 2024, text: "Poolside raises $500M to build code-first AI models" }
      ]},
    { source: "magic", target: "anthropic", type: "rival", strength: 2, startYear: 2024, endYear: null,
      summary: "Magic's 100M+ token context windows directly challenge Claude's long-context leadership for codebase-scale understanding.",
      events: [
        { year: 2024, text: "Magic targets 100M token context \u2014 dwarfing Claude's 200K" }
      ]},

    // === AI Voice & Music ===
    { source: "elevenlabs", target: "openai", type: "rival", strength: 3, startYear: 2024, endYear: null,
      summary: "OpenAI's voice mode in GPT-4o competes with ElevenLabs' text-to-speech APIs. Both push toward real-time AI voice interaction.",
      events: [
        { year: 2024, text: "GPT-4o voice mode threatens ElevenLabs' TTS business" },
        { year: 2024, text: "ElevenLabs differentiates with voice cloning and multilingual" }
      ]},
    { source: "suno", target: "udio", type: "rival", strength: 4, startYear: 2023, endYear: null,
      summary: "The two leading AI music generators in a head-to-head race. Both facing lawsuits from RIAA and major record labels.",
      events: [
        { year: 2023, text: "Suno and Udio both launch AI music generation" },
        { year: 2024, text: "RIAA sues both for copyright infringement \u2014 $150K per song" },
        { year: 2025, text: "Both improve to near-studio quality \u2014 music industry alarmed" }
      ]},
    { source: "suno", target: "spotify", type: "frenemy", strength: 2, startYear: 2024, endYear: null,
      summary: "AI-generated music floods Spotify. Suno enables creation but threatens Spotify's artist ecosystem with unlimited cheap content.",
      events: [
        { year: 2024, text: "Spotify bans AI-generated music impersonating artists" },
        { year: 2024, text: "Suno partners with some labels while others sue" }
      ]},

    // === AI Video ===
    { source: "pika", target: "runway", type: "rival", strength: 3, startYear: 2023, endYear: null,
      summary: "Pika competes directly with Runway in AI video generation. Both targeting filmmakers and content creators.",
      events: [
        { year: 2023, text: "Pika 1.0 launches \u2014 challenges Runway Gen-2" },
        { year: 2024, text: "Pika raises $135M \u2014 AI video generation race heats up" }
      ]},
    { source: "pika", target: "openai", type: "rival", strength: 2, startYear: 2024, endYear: null,
      summary: "OpenAI's Sora threatens all AI video startups including Pika with massive scale and brand recognition.",
      events: [
        { year: 2024, text: "Sora announcement sends shockwaves through AI video startups" }
      ]},

    // === Enterprise AI ===
    { source: "glean", target: "google", type: "rival", strength: 2, startYear: 2023, endYear: null,
      summary: "Glean's enterprise AI search challenges Google Cloud's enterprise search products. Founded by ex-Google engineer.",
      events: [
        { year: 2023, text: "Glean valued at $4.6B \u2014 enterprise AI search leader" },
        { year: 2024, text: "Glean's RAG-based search vs Google Vertex AI Search" }
      ]},
    { source: "glean", target: "microsoft", type: "rival", strength: 2, startYear: 2024, endYear: null,
      summary: "Glean competes with Microsoft 365 Copilot for enterprise knowledge search and AI assistant use cases.",
      events: [
        { year: 2024, text: "Glean vs Microsoft Copilot for enterprise knowledge discovery" }
      ]},
    { source: "harvey", target: "openai", type: "ally", strength: 3, startYear: 2023, endYear: null,
      summary: "Harvey is built on OpenAI's models and received investment from OpenAI's startup fund. The flagship legal AI application.",
      events: [
        { year: 2023, text: "Harvey raises from OpenAI Startup Fund \u2014 built on GPT-4" },
        { year: 2024, text: "Top law firms including Allen & Overy deploy Harvey" }
      ]},
    { source: "sierra", target: "salesforce", type: "rival", strength: 3, startYear: 2023, endYear: null,
      summary: "Sierra's AI customer service agents compete directly with Salesforce's Agentforce. Founded by ex-Salesforce CEO Bret Taylor.",
      events: [
        { year: 2023, text: "Bret Taylor leaves Salesforce, founds Sierra to compete" },
        { year: 2024, text: "Sierra agents vs Salesforce Agentforce \u2014 former CEO vs former company" }
      ]},
    { source: "sierra", target: "anthropic", type: "ally", strength: 2, startYear: 2024, endYear: null,
      summary: "Sierra uses Claude as a core model for its AI customer service agents.",
      events: [
        { year: 2024, text: "Sierra deploys Claude-powered agents for enterprise customers" }
      ]},
    { source: "adept", target: "amazon", type: "acquirer", strength: 3, startYear: 2024, endYear: null,
      summary: "Amazon hired most of Adept's team in 2024, similar to Microsoft's Inflection acqui-hire. Adept's AI agent tech absorbed into Amazon.",
      events: [
        { year: 2024, text: "Amazon hires Adept co-founders and most of engineering team" },
        { year: 2024, text: "Amazon pays licensing fee \u2014 acqui-hire mirrors Microsoft-Inflection" }
      ]},

    // === AI Chips ===
    { source: "groq", target: "nvidia", type: "rival", strength: 3, startYear: 2023, endYear: null,
      summary: "Groq's LPU claims 10x faster inference than NVIDIA GPUs. Targeting the inference market where NVIDIA is less dominant.",
      events: [
        { year: 2023, text: "Groq demos fastest Llama inference \u2014 500+ tokens/sec" },
        { year: 2024, text: "Groq raises $640M \u2014 challenges NVIDIA's inference dominance" }
      ]},
    { source: "cerebras", target: "nvidia", type: "rival", strength: 3, startYear: 2021, endYear: null,
      summary: "Cerebras' wafer-scale chips are the most radical alternative to NVIDIA's GPU architecture. Different philosophy: one giant chip vs many small ones.",
      events: [
        { year: 2021, text: "Cerebras WSE-2 \u2014 world's largest chip at 2.6 trillion transistors" },
        { year: 2024, text: "Cerebras files for IPO \u2014 first major NVIDIA alternative to go public" }
      ]},
    { source: "sambanova", target: "nvidia", type: "rival", strength: 2, startYear: 2021, endYear: null,
      summary: "SambaNova's custom AI chips target enterprises wanting NVIDIA alternatives for training and inference.",
      events: [
        { year: 2021, text: "SambaNova raises $676M for custom AI chip development" },
        { year: 2024, text: "SambaNova Cloud offers fast open-source model inference" }
      ]},

    // === Chinese AI ===
    { source: "baidu", target: "google", type: "rival", strength: 4, startYear: 2000, endYear: null,
      summary: "China's Google. Both compete in search, AI, autonomous driving, and cloud. Baidu's Ernie Bot is China's ChatGPT answer.",
      events: [
        { year: 2000, text: "Baidu launches \u2014 dominates Chinese search after Google exits" },
        { year: 2017, text: "Baidu Apollo vs Waymo in autonomous driving" },
        { year: 2023, text: "Ernie Bot launches as China's ChatGPT competitor" }
      ]},
    { source: "baidu", target: "openai", type: "rival", strength: 3, startYear: 2023, endYear: null,
      summary: "Baidu's Ernie Bot is China's primary ChatGPT alternative. The US-China AI rivalry personified.",
      events: [
        { year: 2023, text: "Ernie Bot reaches 100M users in China" },
        { year: 2024, text: "Ernie 4.0 claims GPT-4 level performance on Chinese benchmarks" }
      ]},
    { source: "zhipu", target: "openai", type: "rival", strength: 2, startYear: 2023, endYear: null,
      summary: "Zhipu's ChatGLM is a leading Chinese LLM competing with ChatGPT in the Chinese market.",
      events: [
        { year: 2023, text: "ChatGLM launches as open-source Chinese ChatGPT alternative" },
        { year: 2024, text: "Zhipu raises $400M+ \u2014 Tencent-backed OpenAI competitor" }
      ]},
    { source: "moonshot", target: "openai", type: "rival", strength: 2, startYear: 2024, endYear: null,
      summary: "Moonshot's Kimi chatbot became hugely popular in China with its long-context capabilities, challenging ChatGPT's dominance.",
      events: [
        { year: 2024, text: "Kimi's 200K-token context goes viral in China" },
        { year: 2024, text: "Moonshot valued at $3B+ \u2014 fastest-growing Chinese AI startup" }
      ]},
    { source: "minimax", target: "meta", type: "rival", strength: 2, startYear: 2024, endYear: null,
      summary: "MiniMax's Hailuo video AI competes with Meta's AI video efforts. Talkie character chatbot rivals Character.AI globally.",
      events: [
        { year: 2024, text: "Hailuo AI video generation goes viral \u2014 free Sora alternative" },
        { year: 2024, text: "Talkie becomes top character AI app outside China" }
      ]},
    { source: "minimax", target: "character", type: "rival", strength: 3, startYear: 2024, endYear: null,
      summary: "MiniMax's Talkie app directly competes with Character.AI for the AI companion chatbot market globally.",
      events: [
        { year: 2024, text: "Talkie challenges Character.AI as top AI companion app" }
      ]},
    { source: "sensetime", target: "nvidia", type: "frenemy", strength: 2, startYear: 2018, endYear: null,
      summary: "SenseTime was a major NVIDIA customer until US sanctions. Now developing own AI chips while still using some NVIDIA hardware.",
      events: [
        { year: 2018, text: "SenseTime among NVIDIA's biggest Chinese AI customers" },
        { year: 2021, text: "US sanctions cut SenseTime off from cutting-edge NVIDIA chips" },
        { year: 2024, text: "SenseTime develops own inference chips as NVIDIA alternative" }
      ]},

    // === AI Robotics ===
    { source: "figure", target: "openai", type: "ally", strength: 3, startYear: 2024, endYear: 2025,
      summary: "OpenAI invested in Figure and provided GPT-4V for robots. Partnership ended Feb 2025 as Figure built proprietary Helix AI platform.",
      events: [
        { year: 2024, text: "OpenAI invests in Figure \u2014 provides GPT-4V for robot reasoning" },
        { year: 2024, text: "Figure 02 demos human-like object manipulation using AI" },
        { year: 2025, text: "Figure ends OpenAI partnership, builds proprietary Helix AI" }
      ]},
    { source: "figure", target: "nvidia", type: "ally", strength: 2, startYear: 2024, endYear: null,
      summary: "Figure uses NVIDIA's Isaac robotics platform and Jetson chips for onboard AI processing in its humanoid robots.",
      events: [
        { year: 2024, text: "NVIDIA invests in Figure \u2014 provides robotics AI infrastructure" }
      ]},
    { source: "figure", target: "tesla", type: "rival", strength: 3, startYear: 2024, endYear: null,
      summary: "Figure's humanoid robots directly compete with Tesla's Optimus robot. Both racing to commercialize humanoid robotics.",
      events: [
        { year: 2024, text: "Figure 02 vs Tesla Optimus Gen 2 \u2014 humanoid robot race" },
        { year: 2025, text: "Both deploy limited robots in warehouse/factory settings" }
      ]},
    { source: "physical", target: "openai", type: "ally", strength: 2, startYear: 2024, endYear: null,
      summary: "Physical Intelligence raised from OpenAI investors and builds foundation models that complement OpenAI's language models for robotics.",
      events: [
        { year: 2024, text: "\u03C00 model enables robots to fold laundry and assemble boxes" }
      ]},

    // === AI Research Labs ===
    { source: "worldlabs", target: "nvidia", type: "ally", strength: 2, startYear: 2024, endYear: null,
      summary: "World Labs uses NVIDIA GPUs for spatial intelligence research. Fei-Fei Li's connections to NVIDIA's AI ecosystem run deep.",
      events: [
        { year: 2024, text: "World Labs raises $230M \u2014 NVIDIA ecosystem partnership" }
      ]},
    { source: "sakana", target: "google", type: "frenemy", strength: 2, startYear: 2023, endYear: null,
      summary: "Sakana was founded by two former Google Brain researchers including the co-inventor of the Transformer architecture.",
      events: [
        { year: 2023, text: "Llion Jones (Transformer co-author) leaves Google, co-founds Sakana" },
        { year: 2024, text: "Sakana raises $300M \u2014 Japan's AI champion" }
      ]},
    { source: "ai21", target: "openai", type: "rival", strength: 2, startYear: 2021, endYear: null,
      summary: "AI21's Jamba models compete with GPT for enterprise NLP. Israeli AI lab with deep NLP research heritage.",
      events: [
        { year: 2021, text: "AI21 Jurassic models compete with GPT-3" },
        { year: 2024, text: "Jamba \u2014 first production Mamba-based model \u2014 challenges Transformer dominance" }
      ]},
    { source: "aleph", target: "mistral", type: "rival", strength: 2, startYear: 2023, endYear: null,
      summary: "Both are European AI champions competing for sovereign AI contracts. Aleph Alpha focuses on Germany, Mistral on France.",
      events: [
        { year: 2023, text: "European sovereign AI race: Aleph Alpha (Germany) vs Mistral (France)" },
        { year: 2024, text: "Aleph pivots to enterprise AI platform \u2014 less model focus" }
      ]},

    // === MLOps / AI Infrastructure ===
    { source: "wandb", target: "openai", type: "frenemy", strength: 2, startYear: 2020, endYear: null,
      summary: "Weights & Biases is used by OpenAI for experiment tracking while also supporting all of OpenAI's competitors.",
      events: [
        { year: 2020, text: "OpenAI uses W&B for GPT training experiment tracking" },
        { year: 2024, text: "W&B serves every major AI lab \u2014 the neutral Switzerland of AI" }
      ]},
    { source: "together", target: "openai", type: "rival", strength: 2, startYear: 2023, endYear: null,
      summary: "Together AI's open-source model hosting directly challenges OpenAI's API by making competitors' models easy to deploy.",
      events: [
        { year: 2023, text: "Together hosts Llama, Mistral, and other OpenAI alternatives" },
        { year: 2024, text: "Together raises $230M+ \u2014 open-source inference at scale" }
      ]},

    // === 2025-2026 Updates ===

    // DeepSeek
    { source: "deepseek", target: "openai", type: "rival", strength: 5, startYear: 2025, endYear: null,
      summary: "DeepSeek R1 matched top US models at a fraction of the cost, causing existential panic in Silicon Valley. Became #1 free app in US ahead of ChatGPT.",
      events: [
        { year: 2025, text: "DeepSeek R1 launches \u2014 matches GPT-4 at ~5% of the cost" },
        { year: 2025, text: "Becomes #1 free app in US \u2014 ahead of ChatGPT" },
        { year: 2025, text: "Causes $1T+ tech stock crash \u2014 NVIDIA drops 17% in one day" }
      ]},
    { source: "deepseek", target: "nvidia", type: "rival", strength: 4, startYear: 2025, endYear: null,
      summary: "DeepSeek proved frontier AI could be trained with far fewer GPUs than assumed, threatening NVIDIA's narrative that more chips = better AI.",
      events: [
        { year: 2025, text: "DeepSeek R1 trained on fraction of NVIDIA GPUs \u2014 NVIDIA stock crashes 17%" },
        { year: 2025, text: "Questions whether massive GPU buildouts are necessary" }
      ]},
    { source: "deepseek", target: "google", type: "rival", strength: 3, startYear: 2025, endYear: null,
      summary: "DeepSeek challenged Google's Gemini alongside OpenAI, proving Chinese labs could match US frontier models.",
      events: [
        { year: 2025, text: "DeepSeek R1 competitive with Gemini on major benchmarks" }
      ]},
    { source: "deepseek", target: "anthropic", type: "rival", strength: 3, startYear: 2025, endYear: null,
      summary: "DeepSeek's open-source approach and cost efficiency challenged Anthropic's premium positioning for Claude.",
      events: [
        { year: 2025, text: "DeepSeek R1 open-sourced \u2014 pressures Claude's commercial model" }
      ]},
    { source: "deepseek", target: "meta", type: "ally", strength: 2, startYear: 2025, endYear: null,
      summary: "Both champion open-source/open-weight AI models. DeepSeek's success validated Meta's Llama open-source strategy.",
      events: [
        { year: 2025, text: "DeepSeek validates open-source AI can match closed models" }
      ]},

    // SpaceX acquires xAI
    { source: "spacex", target: "xai", type: "acquirer", strength: 5, startYear: 2026, endYear: null,
      summary: "SpaceX acquired xAI in February 2026 in the largest merger in history. $1.25T combined valuation. Consolidates Musk's AI, space, and social empire.",
      events: [
        { year: 2026, text: "SpaceX acquires xAI \u2014 largest merger ever at $1.25T combined" },
        { year: 2026, text: "Musk consolidates AI + rockets + social media under one entity" }
      ]},

    // Amazon invests $50B in OpenAI
    { source: "amazon", target: "openai", type: "investor", strength: 4, startYear: 2026, endYear: null,
      summary: "Amazon invested $50B in OpenAI's $110B Feb 2026 round, pivoting from exclusive Anthropic bet to hedging across both leading AI labs.",
      events: [
        { year: 2026, text: "Amazon invests $50B in OpenAI \u2014 $730B valuation round" },
        { year: 2026, text: "Amazon now invested in both OpenAI and Anthropic" }
      ]},

    // NVIDIA invests in Intel
    { source: "nvidia", target: "intel", type: "investor", strength: 3, startYear: 2025, endYear: null,
      summary: "NVIDIA invested $5B in Intel as part of Intel's restructuring. A surprising move from Intel's biggest rival, signaling industry consolidation.",
      events: [
        { year: 2025, text: "NVIDIA invests $5B in struggling Intel \u2014 rivals become partners" }
      ]},

    // TikTok resolution
    { source: "tiktok", target: "oracle", type: "ally", strength: 4, startYear: 2026, endYear: null,
      summary: "Oracle became a key stakeholder in the TikTok USDS joint venture that resolved the US ban. Oracle holds ~15% alongside Silver Lake and MGX.",
      events: [
        { year: 2026, text: "TikTok USDS JV formed \u2014 Oracle takes ~15% stake" },
        { year: 2026, text: "ByteDance retains <20% \u2014 US ban crisis resolved" }
      ]},

    // === Global Tech Relationships ===

    // Tencent
    { source: "tencent", target: "epic", type: "investor", strength: 4, startYear: 2012, endYear: null,
      summary: "Tencent owns 40% of Epic Games, making it the largest outside shareholder. Strategic access to Unreal Engine and Western gaming market.",
      events: [
        { year: 2012, text: "Tencent acquires 40% of Epic Games for $330M" },
        { year: 2020, text: "Epic's valuation rises to $30B+ \u2014 massive return for Tencent" }
      ]},
    { source: "tencent", target: "snap", type: "investor", strength: 2, startYear: 2017, endYear: null,
      summary: "Tencent acquired 12% of Snap in 2017, becoming one of its largest shareholders. Strategic window into Western social media.",
      events: [
        { year: 2017, text: "Tencent acquires 12% of Snap for ~$2B" }
      ]},
    { source: "tencent", target: "meta", type: "rival", strength: 3, startYear: 2012, endYear: null,
      summary: "WeChat vs Facebook/WhatsApp for global messaging dominance. Tencent dominates China while Meta dominates the rest of the world.",
      events: [
        { year: 2012, text: "WeChat reaches 300M users \u2014 threatens WhatsApp in Asia" },
        { year: 2024, text: "WeChat at 1.3B MAU vs WhatsApp at 2B+ \u2014 geo-split dominance" }
      ]},
    { source: "tencent", target: "minimax", type: "investor", strength: 3, startYear: 2023, endYear: null,
      summary: "Tencent is a major investor in MiniMax, backing China's leading multimodal AI company.",
      events: [
        { year: 2023, text: "Tencent leads investment in MiniMax" }
      ]},

    // Alibaba
    { source: "alibaba", target: "amazon", type: "rival", strength: 4, startYear: 2014, endYear: null,
      summary: "The global e-commerce war. Alibaba dominates China and expanding globally while Amazon dominates the West. Cloud rivalry too (Alibaba Cloud vs AWS).",
      events: [
        { year: 2014, text: "Alibaba IPO at $25B \u2014 largest tech IPO ever at the time" },
        { year: 2019, text: "Alibaba Cloud becomes Asia's #1 cloud provider" },
        { year: 2024, text: "Alibaba's Qwen AI models compete with Western and Chinese labs" }
      ]},
    { source: "alibaba", target: "tencent", type: "rival", strength: 5, startYear: 2013, endYear: null,
      summary: "China's defining tech rivalry. Alibaba (e-commerce, cloud) vs Tencent (social, gaming). Every Chinese startup had to choose sides.",
      events: [
        { year: 2013, text: "Alibaba vs Tencent mobile payments war begins" },
        { year: 2020, text: "Both companies back rival startups across every sector" },
        { year: 2024, text: "China antitrust crackdown forces both to open their walled gardens" }
      ]},
    { source: "alibaba", target: "deepseek", type: "ally", strength: 2, startYear: 2025, endYear: null,
      summary: "Alibaba Cloud hosts DeepSeek models and integrates them into its cloud AI offerings.",
      events: [
        { year: 2025, text: "Alibaba Cloud offers DeepSeek R1 on its platform" }
      ]},

    // SoftBank
    { source: "softbank", target: "openai", type: "investor", strength: 5, startYear: 2025, endYear: null,
      summary: "SoftBank led OpenAI's $40B round in March 2025, the largest private fundraise ever. Masayoshi Son betting his legacy on AI.",
      events: [
        { year: 2025, text: "SoftBank leads $40B OpenAI round \u2014 largest private raise in history" },
        { year: 2025, text: "Son commits to Stargate AI infrastructure project" }
      ]},
    { source: "softbank", target: "arm", type: "investor", strength: 5, startYear: 2016, endYear: null,
      summary: "SoftBank acquired Arm for $32B in 2016, took it public in 2023. Arm is SoftBank's crown jewel and biggest bet.",
      events: [
        { year: 2016, text: "SoftBank acquires Arm for $32B" },
        { year: 2023, text: "Arm IPOs at $54B \u2014 SoftBank retains 90% stake" }
      ]},
    { source: "softbank", target: "nvidia", type: "ally", strength: 3, startYear: 2024, endYear: null,
      summary: "SoftBank is building Japan's largest AI supercomputer using NVIDIA chips. Massive GPU buyer for AI infrastructure.",
      events: [
        { year: 2024, text: "SoftBank orders massive NVIDIA GPU clusters for Japan AI infra" }
      ]},

    // ASML
    { source: "asml", target: "tsmc", type: "ally", strength: 5, startYear: 2000, endYear: null,
      summary: "ASML's EUV lithography machines are required for every sub-7nm chip. TSMC is ASML's largest customer. No ASML = no advanced chips.",
      events: [
        { year: 2000, text: "TSMC and ASML begin deep EUV co-development" },
        { year: 2020, text: "ASML EUV enables TSMC's 5nm node \u2014 Apple M1 made possible" },
        { year: 2024, text: "ASML High-NA EUV (next gen) first shipped to Intel and TSMC" }
      ]},
    { source: "asml", target: "intel", type: "ally", strength: 3, startYear: 2018, endYear: null,
      summary: "Intel was an early ASML EUV customer and co-investor. Now depends on ASML for its foundry comeback strategy.",
      events: [
        { year: 2018, text: "Intel finally adopts EUV \u2014 years behind TSMC" },
        { year: 2024, text: "Intel receives first ASML High-NA EUV machine" }
      ]},
    { source: "asml", target: "samsung", type: "ally", strength: 3, startYear: 2015, endYear: null,
      summary: "Samsung Foundry uses ASML EUV for advanced node production. All three major foundries depend on ASML.",
      events: [
        { year: 2015, text: "Samsung adopts ASML EUV for 7nm development" },
        { year: 2024, text: "Samsung struggles with EUV yields vs TSMC" }
      ]},
    { source: "asml", target: "mistral", type: "investor", strength: 2, startYear: 2025, endYear: null,
      summary: "ASML took an 11% stake in Mistral AI as part of its Series C, bridging European semiconductor and AI sovereignty.",
      events: [
        { year: 2025, text: "ASML invests in Mistral \u2014 European tech sovereignty alliance" }
      ]},

    // SK Hynix
    { source: "samsung2", target: "nvidia", type: "ally", strength: 4, startYear: 2023, endYear: null,
      summary: "SK Hynix supplies the HBM (High Bandwidth Memory) chips essential for NVIDIA's AI GPUs. The critical memory supplier for the AI boom.",
      events: [
        { year: 2023, text: "SK Hynix HBM3 chips power NVIDIA H100 GPUs" },
        { year: 2024, text: "SK Hynix dominance in HBM gives it pricing power over NVIDIA" }
      ]},
    { source: "samsung2", target: "samsung", type: "rival", strength: 4, startYear: 2018, endYear: null,
      summary: "SK Hynix and Samsung are the world's #1 and #2 memory chipmakers. Fierce rivals in DRAM and NAND, now racing in HBM for AI.",
      events: [
        { year: 2018, text: "Memory chip duopoly controls 70%+ of global market" },
        { year: 2024, text: "SK Hynix leads in HBM for AI \u2014 Samsung struggles to catch up" }
      ]},

    // SAP
    { source: "sap", target: "oracle", type: "rival", strength: 4, startYear: 1990, endYear: null,
      summary: "The original enterprise software rivalry. SAP dominates ERP in Europe, Oracle in North America. Both now racing to add AI to enterprise.",
      events: [
        { year: 1990, text: "SAP R/3 vs Oracle Applications \u2014 ERP wars begin" },
        { year: 2024, text: "Both push AI agents for enterprise automation" }
      ]},
    { source: "sap", target: "salesforce", type: "rival", strength: 3, startYear: 2015, endYear: null,
      summary: "SAP and Salesforce compete for enterprise CRM and business process automation. SAP's cloud pivot challenges Salesforce's SaaS dominance.",
      events: [
        { year: 2015, text: "SAP pushes S/4HANA cloud \u2014 challenges Salesforce model" }
      ]},

    // Sony & Nintendo
    { source: "sony", target: "nintendo", type: "rival", strength: 4, startYear: 1994, endYear: null,
      summary: "PlayStation vs Nintendo \u2014 the longest-running console war. Different philosophies: Sony targets core gamers, Nintendo targets everyone.",
      events: [
        { year: 1994, text: "PlayStation launches \u2014 born from a failed Sony-Nintendo partnership" },
        { year: 2017, text: "Switch outsells PS4 in Japan \u2014 Nintendo's comeback" },
        { year: 2025, text: "Switch 2 announced vs PS5 Pro \u2014 console war continues" }
      ]},
    { source: "sony", target: "microsoft", type: "rival", strength: 4, startYear: 2001, endYear: null,
      summary: "PlayStation vs Xbox \u2014 the modern console war. Microsoft's $69B Activision acquisition shook the industry.",
      events: [
        { year: 2001, text: "Xbox launches \u2014 Microsoft enters console gaming" },
        { year: 2023, text: "Microsoft acquires Activision for $69B \u2014 Sony protests" },
        { year: 2024, text: "Xbox shifts to multiplatform \u2014 console war evolves" }
      ]},
    { source: "sony", target: "epic", type: "ally", strength: 2, startYear: 2020, endYear: null,
      summary: "Sony invested $450M in Epic Games. PlayStation uses Unreal Engine. Strategic alliance in gaming technology.",
      events: [
        { year: 2020, text: "Sony invests $250M in Epic Games" },
        { year: 2022, text: "Sony invests additional $200M \u2014 Unreal Engine partnership deepens" }
      ]},

    // Grab & Sea
    { source: "grab", target: "uber", type: "rival", strength: 3, startYear: 2014, endYear: 2018,
      summary: "Grab fought Uber for Southeast Asian ride-hailing dominance and won. Uber sold its SEA business to Grab in 2018.",
      events: [
        { year: 2014, text: "Grab vs Uber battle for Southeast Asia begins" },
        { year: 2018, text: "Uber exits SEA \u2014 sells to Grab in exchange for 27.5% stake" }
      ]},
    { source: "grab", target: "sea", type: "rival", strength: 3, startYear: 2019, endYear: null,
      summary: "Grab and Sea Limited compete across Southeast Asia in delivery, e-commerce, and fintech. The defining SEA tech rivalry.",
      events: [
        { year: 2019, text: "Grab vs Shopee (Sea) delivery and e-commerce wars in SEA" }
      ]},

    // MercadoLibre
    { source: "mercadolibre", target: "amazon", type: "rival", strength: 3, startYear: 2015, endYear: null,
      summary: "MercadoLibre is the Amazon of Latin America. Amazon has tried to expand in LatAm but MercadoLibre's local expertise keeps it dominant.",
      events: [
        { year: 2015, text: "Amazon enters Brazil and Mexico \u2014 challenges MercadoLibre" },
        { year: 2024, text: "MercadoLibre still dominates LatAm e-commerce despite Amazon push" }
      ]},

    // Canva
    { source: "canva", target: "adobe", type: "rival", strength: 3, startYear: 2018, endYear: null,
      summary: "Canva democratized design for non-professionals, eating into Adobe's market from below. Adobe's biggest threat from a non-AI direction.",
      events: [
        { year: 2018, text: "Canva reaches 15M users \u2014 Adobe Express launched to compete" },
        { year: 2024, text: "Canva at 190M+ users \u2014 adds AI features, threatens Adobe Creative Cloud" }
      ]},
    { source: "canva", target: "figma", type: "rival", strength: 2, startYear: 2020, endYear: null,
      summary: "Canva and Figma compete for the collaborative design market from different angles. Canva targets everyone, Figma targets professionals.",
      events: [
        { year: 2024, text: "Canva adds Figma-like features while Figma stays pro-focused" }
      ]},

    // Klarna & Revolut
    { source: "klarna", target: "paypal", type: "rival", strength: 3, startYear: 2019, endYear: null,
      summary: "Klarna's Buy Now Pay Later model directly challenged PayPal's checkout dominance. PayPal responded with its own BNPL offering.",
      events: [
        { year: 2019, text: "BNPL surges \u2014 Klarna challenges PayPal at checkout" },
        { year: 2025, text: "Klarna IPOs at $15B \u2014 replaced 700 agents with AI" }
      ]},
    { source: "revolut", target: "wise", type: "rival", strength: 3, startYear: 2018, endYear: null,
      summary: "Both European fintechs compete in international money transfers and digital banking. Revolut went broader, Wise stayed focused on transfers.",
      events: [
        { year: 2018, text: "Revolut and Wise compete for international money transfer market" },
        { year: 2024, text: "Revolut reaches $45B valuation \u2014 Europe's largest fintech" }
      ]},

    // Missing notable relationships
    { source: "microsoft", target: "linkedin", type: "acquirer", strength: 5, startYear: 2016, endYear: null,
      summary: "Microsoft bought LinkedIn to pair the world's largest professional network with Office, Dynamics, and enterprise distribution.",
      events: [
        { year: 2016, text: "Microsoft acquires LinkedIn for $26.2B" },
        { year: 2020, text: "Ryan Roslansky becomes LinkedIn CEO" },
        { year: 2026, text: "LinkedIn says annual revenue has grown to north of $17B under Roslansky" }
      ]},
    { source: "valve", target: "epic", type: "rival", strength: 4, startYear: 2018, endYear: null,
      summary: "Epic Games Store directly challenged Steam with lower take rates and timed exclusives, forcing the first serious digital storefront battle in PC gaming in years.",
      events: [
        { year: 2018, text: "Epic Games Store launches with an 88/12 revenue split" },
        { year: 2019, text: "Epic spends aggressively on PC exclusives to attack Steam's dominance" },
        { year: 2024, text: "Steam remains the default PC storefront while Epic stays the main challenger" }
      ]},
    { source: "valve", target: "microsoft", type: "frenemy", strength: 3, startYear: 2003, endYear: null,
      summary: "Steam depends heavily on Windows PCs, but Valve also sees Microsoft as a platform threat through Xbox, Game Pass, and the Microsoft Store.",
      events: [
        { year: 2003, text: "Valve launches Steam on Windows" },
        { year: 2012, text: "Gabe Newell calls Windows 8 a 'catastrophe' for the open PC ecosystem" },
        { year: 2022, text: "Microsoft works with Valve on bringing Xbox Cloud Gaming to Steam Deck" }
      ]},
    { source: "roblox", target: "epic", type: "rival", strength: 4, startYear: 2020, endYear: null,
      summary: "Roblox and Epic both want to own user-generated 3D worlds, creator economies, and the future of immersive entertainment.",
      events: [
        { year: 2020, text: "Fortnite concerts and social events push Epic deeper into Roblox territory" },
        { year: 2023, text: "Epic launches UEFN, escalating the fight for creators and virtual-world development" },
        { year: 2024, text: "Both pitch themselves as foundational platforms for immersive online experiences" }
      ]},
    { source: "paloalto", target: "crowdstrike", type: "rival", strength: 5, startYear: 2016, endYear: null,
      summary: "Palo Alto Networks and CrowdStrike are two of the most aggressive cybersecurity platform competitors, battling across endpoint, cloud, SOC, and enterprise budgets.",
      events: [
        { year: 2016, text: "CrowdStrike's cloud-native endpoint rise pressures incumbent security vendors" },
        { year: 2023, text: "Both push platform consolidation messages to CISOs" },
        { year: 2025, text: "The two remain among the most valuable pure-play security companies" }
      ]},
    { source: "paloalto", target: "microsoft", type: "rival", strength: 4, startYear: 2020, endYear: null,
      summary: "Microsoft's bundled security stack and Palo Alto's platform strategy collide in cloud security, identity-adjacent controls, and security operations.",
      events: [
        { year: 2020, text: "Cloud security becomes a core battleground between Palo Alto and Microsoft's security business" },
        { year: 2024, text: "Both emphasize security platform consolidation and AI-driven SOC workflows" }
      ]},
    { source: "paloalto", target: "cisco", type: "rival", strength: 3, startYear: 2015, endYear: null,
      summary: "Both sell large-scale enterprise networking and security platforms, increasingly converging around secure infrastructure and SOC tooling.",
      events: [
        { year: 2015, text: "Cisco and Palo Alto intensify competition in next-generation network security" },
        { year: 2024, text: "Cisco's Splunk acquisition sharpens the overlap in security and observability" }
      ]},
    { source: "twilio", target: "microsoft", type: "rival", strength: 3, startYear: 2021, endYear: null,
      summary: "Twilio's communications APIs increasingly overlap with Microsoft's push into Teams, Azure Communication Services, and customer engagement workflows.",
      events: [
        { year: 2021, text: "Microsoft expands Azure Communication Services, entering Twilio's core category more directly" },
        { year: 2024, text: "Both push AI-enhanced customer communication and contact-center tooling" }
      ]},
    { source: "twilio", target: "zoom", type: "rival", strength: 2, startYear: 2022, endYear: null,
      summary: "Zoom's expansion into phone, contact center, and customer engagement brings it into more direct competition with Twilio's communications stack.",
      events: [
        { year: 2022, text: "Zoom launches Contact Center, moving beyond meetings into Twilio territory" },
        { year: 2024, text: "Both promote AI-enhanced customer communication products" }
      ]},
    { source: "infosys", target: "wipro", type: "rival", strength: 4, startYear: 1990, endYear: null,
      summary: "Infosys and Wipro are two of India's best-known IT services firms, competing for global outsourcing, consulting, cloud, and AI transformation deals.",
      events: [
        { year: 1990, text: "Indian IT services champions begin competing globally for outsourcing contracts" },
        { year: 2024, text: "Both pitch themselves as AI-led transformation partners for large enterprises" }
      ]},
    { source: "infosys", target: "microsoft", type: "ally", strength: 3, startYear: 2018, endYear: null,
      summary: "Infosys is a major Microsoft ecosystem partner, helping enterprises roll out Azure, Copilot, and broader cloud modernization programs.",
      events: [
        { year: 2018, text: "Infosys deepens strategic Azure-focused enterprise transformation work" },
        { year: 2024, text: "Infosys expands Microsoft-based enterprise AI and Copilot services" }
      ]},
    { source: "wipro", target: "google", type: "ally", strength: 2, startYear: 2017, endYear: null,
      summary: "Wipro and Google Cloud partner on enterprise migration, data, and AI projects for large global customers.",
      events: [
        { year: 2017, text: "Wipro and Google Cloud begin scaling their enterprise partnership" },
        { year: 2024, text: "The partnership expands further around generative AI and data modernization" }
      ]},
    { source: "naver", target: "kakao", type: "rival", strength: 5, startYear: 2014, endYear: null,
      summary: "NAVER and Kakao are the defining Korean internet rivals, competing across messaging, content, payments, commerce, AI, and consumer attention.",
      events: [
        { year: 2014, text: "Kakao merges with Daum, sharpening the rivalry with NAVER" },
        { year: 2023, text: "Both lean harder into AI as the next phase of platform competition" },
        { year: 2025, text: "The rivalry expands across messaging, content, fintech, and AI products" }
      ]},
    { source: "naver", target: "softbank", type: "ally", strength: 4, startYear: 2019, endYear: null,
      summary: "NAVER and SoftBank teamed up around LINE and Yahoo Japan, creating one of Asia's largest internet platform combinations.",
      events: [
        { year: 2019, text: "NAVER and SoftBank announce plans to integrate LINE and Z Holdings" },
        { year: 2021, text: "LINE-Z Holdings deal closes" },
        { year: 2023, text: "LY Corporation structure becomes central to the combined platform strategy" }
      ]},
    { source: "atlassian", target: "microsoft", type: "rival", strength: 4, startYear: 2017, endYear: null,
      summary: "Atlassian competes with Microsoft across workplace collaboration, IT service management, and increasingly software-team workflow tooling.",
      events: [
        { year: 2017, text: "Microsoft Teams and Atlassian products begin overlapping more in collaboration workflows" },
        { year: 2023, text: "Atlassian pushes ITSM and enterprise collaboration harder against Microsoft's stack" },
        { year: 2024, text: "Both add AI copilots across core workplace products" }
      ]},
    { source: "atlassian", target: "github", type: "rival", strength: 3, startYear: 2016, endYear: null,
      summary: "Bitbucket, Jira, and Atlassian's software-workflow products increasingly overlap with GitHub's code, project, and developer platform expansion.",
      events: [
        { year: 2016, text: "Bitbucket and GitHub solidify as rival collaboration hubs for software teams" },
        { year: 2023, text: "GitHub expands deeper into planning and developer workflow automation" },
        { year: 2024, text: "AI-assisted development raises the strategic importance of both ecosystems" }
      ]},
    { source: "datadog", target: "splunk", type: "rival", strength: 5, startYear: 2017, endYear: null,
      summary: "Datadog and Splunk have spent years fighting for observability, logs, security analytics, and cloud-operations budgets.",
      events: [
        { year: 2019, text: "Datadog IPO underscores the rise of cloud-native observability" },
        { year: 2023, text: "Splunk keeps pushing deeper into observability while Datadog expands further into security" },
        { year: 2024, text: "Cisco's acquisition of Splunk raises the stakes in the rivalry" }
      ]},
    { source: "cisco", target: "splunk", type: "acquirer", strength: 5, startYear: 2024, endYear: null,
      summary: "Cisco acquired Splunk to combine networking, security, and observability into a larger software and digital resilience platform.",
      events: [
        { year: 2023, text: "Cisco announces a deal to buy Splunk for about $28B" },
        { year: 2024, text: "Cisco completes the Splunk acquisition in March" },
        { year: 2025, text: "Cisco keeps building more of its security and observability strategy around Splunk" }
      ]},
    { source: "byd", target: "tesla", type: "rival", strength: 5, startYear: 2020, endYear: null,
      summary: "BYD and Tesla are the highest-profile EV rivals globally, with BYD dominating volume and Tesla leading on brand, margins, and software mindshare.",
      events: [
        { year: 2020, text: "BYD's EV and PHEV scale-up starts drawing direct global comparisons to Tesla" },
        { year: 2024, text: "BYD's automotive revenue surpasses Tesla's in a quarter" },
        { year: 2025, text: "Tesla still leads on valuation, but BYD remains the strongest volume challenger" }
      ]},
    { source: "byd", target: "nio", type: "rival", strength: 4, startYear: 2018, endYear: null,
      summary: "BYD and NIO compete in China's EV market, though BYD targets the mass market more broadly while NIO stays more premium.",
      events: [
        { year: 2018, text: "Chinese EV startups and incumbents intensify competition as the market scales" },
        { year: 2024, text: "BYD's scale advantage widens while NIO keeps pushing premium smart EVs" }
      ]},
    { source: "nio", target: "tesla", type: "rival", strength: 4, startYear: 2018, endYear: null,
      summary: "NIO positioned itself as a premium Chinese EV rival to Tesla, differentiating through battery swapping and a high-touch owner community.",
      events: [
        { year: 2018, text: "NIO lists in the US and is quickly labeled a Chinese challenger to Tesla" },
        { year: 2020, text: "NIO's rebound and soaring stock revive the Tesla comparison" },
        { year: 2024, text: "Battery swapping and premium branding remain NIO's main points of differentiation" }
      ]},
    { source: "disney", target: "netflix", type: "rival", strength: 5, startYear: 2019, endYear: null,
      summary: "Disney+ turned Disney into Netflix's most direct legacy-media streaming rival by combining blockbuster IP with a scaled direct-to-consumer push.",
      events: [
        { year: 2019, text: "Disney+ launches and immediately becomes the biggest new threat to Netflix among legacy media companies" },
        { year: 2022, text: "Both companies expand ad-supported streaming tiers" },
        { year: 2025, text: "Streaming profitability and retention become the central battleground" }
      ]},
    { source: "disney", target: "epic", type: "ally", strength: 3, startYear: 2024, endYear: null,
      summary: "Disney invested in Epic to build a larger games and entertainment universe around its franchises inside Epic's ecosystem.",
      events: [
        { year: 2024, text: "Disney announces a $1.5B investment in Epic Games" },
        { year: 2024, text: "The companies outline plans for a persistent Disney universe connected to Fortnite" }
      ]},
    { source: "disney", target: "amazon", type: "rival", strength: 3, startYear: 2019, endYear: null,
      summary: "Disney+ competes with Prime Video for household streaming time, studio distribution leverage, and advertising-supported streaming growth.",
      events: [
        { year: 2019, text: "Disney+ launches into a streaming market already shaped by Amazon Prime Video" },
        { year: 2024, text: "Both push harder into ad-supported streaming and sports-related media strategy" }
      ]}
  ]
};
