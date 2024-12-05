export const lectures = [
    {
        id: "ai-introduction",
        title: "Introduction to AI",
        sections: [
            {
                type: "slides",
                title: "What is AI?",
                content: [
                    {
                        title: "What is Artificial Intelligence?",
                        content: [
                            "AI is the simulation of human intelligence in machines",
                            "It's about creating smart machines that can perform tasks that typically require human intelligence",
                            "AI systems can learn, reason, perceive, and make decisions",
                            "Think of AI as giving computers a 'brain' to solve problems and make choices"
                        ]
                    },
                    {
                        title: "Understanding Artificial Intelligence",
                        content: [
                            "Imagine having a super-smart computer friend who can think and learn!",
                            "AI is like giving computers a 'brain' to solve problems and make decisions",
                            "Just like how you learn from your teachers and experiences, AI learns from data and examples",
                            "AI helps computers understand things like images, speech, and text - just like humans do!",
                            "Think of AI as a helpful assistant that can make our lives easier in many ways"
                        ],
                        demo: {
                            title: "Meet an AI Assistant",
                            description: "Interactive demonstration of a simple AI chatbot"
                        }
                    },
                    {
                        title: "AI Fundamentals - The Building Blocks",
                        content: [
                            "Data: The food for AI's brain - AI learns from lots of examples",
                            "Algorithms: Like recipes that tell AI how to solve problems",
                            "Training: Teaching AI by showing it many examples, like how you learn through practice",
                            "Decision Making: AI uses what it learned to make smart choices",
                            "Let's think of it like teaching a pet: you show examples, they learn patterns, and then they can recognize similar things!"
                        ],
                        demo: {
                            title: "How AI Learns",
                            description: "Interactive game showing how AI learns patterns"
                        }
                    },
                    {
                        title: "AI in Your Daily Life",
                        content: [
                            "Your Phone's Assistant: Siri or Google Assistant helping you set alarms and answer questions",
                            "Video Games: Smart computer opponents that adapt to how you play",
                            "Social Media: Filters that can add fun effects to your photos",
                            "YouTube: Suggesting videos you might like based on what you've watched",
                            "Smart Home: Devices that learn your preferences for temperature and lighting",
                            "Let's spot AI around us: Can you think of more examples?"
                        ],
                        demo: {
                            title: "AI Scavenger Hunt",
                            description: "Interactive activity to identify AI in everyday objects"
                        }
                    },
                    {
                        title: "The Journey of AI - A Brief History",
                        content: [
                            "1950s: Scientists start dreaming about smart machines",
                            "1956: AI gets its name at a special meeting of scientists",
                            "1960s-1970s: Early excitement and first AI programs",
                            "1980s-1990s: AI starts becoming more practical",
                            "2000s-Today: AI becomes super powerful with better computers",
                            "Future: What amazing things do you think AI will do next?"
                        ],
                        demo: {
                            title: "Time Travel Through AI History",
                            description: "Interactive timeline with major AI milestones"
                        }
                    },
                    {
                        title: "Types of AI - How Smart Can They Be?",
                        content: [
                            "Narrow AI (Like a specialist):",
                            "- Good at one specific task (like playing chess)",
                            "- Most AI today is Narrow AI",
                            "- Examples: Face filters, game AI, spelling checker",
                            "",
                            "General AI (Like a human):",
                            "- Could do any task a human can",
                            "- Doesn't exist yet - it's still a dream!",
                            "- Would be able to learn and adapt like humans",
                            "",
                            "Super AI (Super-human):",
                            "- Smarter than humans in every way",
                            "- Only exists in science fiction... for now!",
                            "- Raises interesting questions about the future"
                        ]
                    }
                ]
            },
            {
                type: "quiz",
                title: "Quiz: Basic Concepts",
                questions: [
                    {
                        question: "What does AI stand for?",
                        options: ["Artificial Intelligence", "Automated Information", "Advanced Integration", "Algorithmic Iteration"],
                        correctAnswer: 0
                    },
                    {
                        question: "Which of these is NOT a fundamental component of AI?",
                        options: ["Data", "Algorithms", "Machine Learning", "Social Media"],
                        correctAnswer: 3
                    },
                    {
                        question: "Which of these is NOT a type of AI?",
                        options: ["Narrow AI", "General AI", "Super AI", "Infinite AI"],
                        correctAnswer: 3
                    },
                    {
                        question: "What was a significant event in AI history during the 1950s?",
                        options: ["Invention of the computer", "First AI winter", "Proposal of the Turing Test", "Creation of the first neural network"],
                        correctAnswer: 2
                    },

                    {
                        question: "What distinguishes General AI from Narrow AI?",
                        options: ["Processing speed", "Ability to perform multiple tasks like humans", "Cost efficiency", "Programming language"],
                        correctAnswer: 1
                    },
                    {
                        question: "Which milestone marked the beginning of modern AI?",
                        options: ["Internet creation", "Dartmouth Conference", "First computer", "Social media"],
                        correctAnswer: 1
                    },
                    {
                        question: "What is a key characteristic of Super AI?",
                        options: ["Limited to one task", "Equal to human intelligence", "Surpasses human intelligence", "Only processes numbers"],
                        correctAnswer: 2
                    },
                    {
                        question: "What is the primary purpose of AI in everyday applications?",
                        options: ["Replace humans completely", "Automate and assist human tasks", "Generate profit", "Store data"],
                        correctAnswer: 1
                    },
                    {
                        question: "What is the primary characteristic of Narrow AI?",
                        options: ["Can perform any task", "Designed for a specific task", "Has human-like consciousness", "Can improve itself"],
                        correctAnswer: 1
                    },
                ]
            },
            {
                type: "slides",
                title: "AI Domains - The Special Powers",
                content: [
                    {
                        title: "Neural Networks - AI's Brain",
                        content: [
                            "Imagine tiny brain cells working together:",
                            "- Inspired by how our own brains work",
                            "- Millions of connected artificial neurons",
                            "- Each connection helps AI learn something new",
                            "- The more they practice, the better they get",
                            "",
                            "How Neural Networks Learn:",
                            "- They start knowing nothing, like a baby",
                            "- We show them lots of examples",
                            "- They find patterns and remember them",
                            "- Finally, they can recognize new things they've never seen!"
                        ],
                        demo: {
                            title: "Build Your Own Neural Network",
                            description: "Interactive puzzle to connect neurons and see how they work"
                        }
                    },
                    {
                        title: "Computer Vision - AI's Eyes",
                        content: [
                            "Teaching computers to 'see' and understand images:",
                            "- Recognizing faces in photos",
                            "- Finding objects in pictures",
                            "- Reading text from images",
                            "- Understanding what's happening in videos",
                            "",
                            "Real-World Applications:",
                            "- Snapchat filters that follow your face",
                            "- Cars that can spot traffic signs",
                            "- Apps that can identify plants from photos",
                            "- Security cameras that detect movement"
                        ],
                        demo: {
                            title: "AI Vision Explorer",
                            description: "Try teaching AI to recognize different objects"
                        }
                    },
                    {
                        title: "Natural Language Processing - AI's Communication Skills",
                        content: [
                            "Helping AI understand and use human language:",
                            "- Reading and understanding text",
                            "- Translating between languages",
                            "- Chatting with humans",
                            "- Understanding speech and responding",
                            "",
                            "Cool Things NLP Can Do:",
                            "- Auto-complete your sentences while typing",
                            "- Translate signs in real-time using your phone",
                            "- Help you learn new languages",
                            "- Answer questions about any topic"
                        ],
                        demo: {
                            title: "Language Games with AI",
                            description: "Interactive language activities with AI"
                        }
                    }
                ]
            },
            {
                type: "slides",
                title: "Interactive Activities",
                content: [
                    {
                        title: "AI Treasure Hunt",
                        content: [
                            "Let's explore AI in our daily lives:",
                            "- Form small groups",
                            "- List all AI applications you use daily",
                            "- Share your discoveries with the class",
                            "- Discuss how each AI makes life easier"
                        ],
                        demo: {
                            title: "AI Detective",
                            description: "Interactive group activity to spot AI around us"
                        }
                    },
                    {
                        title: "Domain Explorer",
                        content: [
                            "Hands-on exploration of AI domains:",
                            "- Try simple computer vision demos",
                            "- Experiment with language processing",
                            "- Play with neural network visualizations",
                            "- Create your own AI applications ideas"
                        ],
                        demo: {
                            title: "AI Domain Workshop",
                            description: "Interactive stations for each AI domain"
                        }
                    }
                ]
            },
            {
                type: "quiz",
                title: "Quiz: Advanced Topics",
                questions: [
                    {
                        question: "What is a common application of Computer Vision?",
                        options: ["Text translation", "Speech recognition", "Facial recognition", "Stock market prediction"],
                        correctAnswer: 2
                    },
                    {
                        question: "Which AI domain deals with machines understanding human language?",
                        options: ["Computer Vision", "Neural Networks", "Natural Language Processing", "Machine Learning"],
                        correctAnswer: 2
                    },
                    {
                        question: "What is a potential future application of AI in healthcare?",
                        options: ["Building skyscrapers", "Cooking gourmet meals", "Personalized medicine", "Writing novels"],
                        correctAnswer: 2
                    },
                    {
                        question: "Which technology enables computers to process and understand human language?",
                        options: ["Computer Vision", "Neural Networks", "Natural Language Processing", "Robotics"],
                        correctAnswer: 2
                    },
                    {
                        question: "What is the basic building block of neural networks?",
                        options: ["Database", "Artificial Neuron", "Programming Code", "Graphics Card"],
                        correctAnswer: 1
                    },
                    {
                        question: "Which type of Machine Learning involves learning from labeled data?",
                        options: ["Unsupervised Learning", "Reinforcement Learning", "Semi-supervised Learning", "Supervised Learning"],
                        correctAnswer: 3
                    },
                    {
                        question: "How does Computer Vision primarily interact with the world?",
                        options: ["Through sound analysis", "Through image and video processing", "Through text processing", "Through numerical calculations"],
                        correctAnswer: 1
                    },

                    {
                        question: "Which AI domain is crucial for autonomous vehicles to function?",
                        options: ["Natural Language Processing", "Computer Vision", "Audio Processing", "Web Development"],
                        correctAnswer: 1
                    },

                    {
                        question: "What is the main challenge in Natural Language Processing?",
                        options: ["Image recognition", "Understanding context and ambiguity", "Solving mathematical equations", "Playing chess"],
                        correctAnswer: 1
                    },
                    {
                        question: "Which component is essential for AI systems to learn from experience?",
                        options: ["Social media integration", "Data collection and processing", "Internet connection", "User interface"],
                        correctAnswer: 1
                    },
                ]
            },
            {
                type: "slides",
                title: "Understanding AI - Going Deeper",
                content: [
                    {
                        title: "Natural Language Processing - Going Deeper",
                        content: [
                            "Breaking Down Language (Tokenization):",
                            "- Like breaking a sentence into puzzle pieces",
                            "- Each word becomes a separate piece",
                            "- Example: 'I love pizza' → ['I', 'love', 'pizza']",
                            "- Helps computer understand one word at a time",
                            "",
                            "Real World Examples:",
                            "- Auto-correct on your phone",
                            "- Search engines understanding your questions",
                            "- Voice assistants breaking down your commands",
                            "- Spell checkers in your documents"
                        ]
                    },
                    {
                        title: "Word Detective (Parts of Speech)",
                        content: [
                            "Finding word types in sentences:",
                            "- Like sorting candy by color",
                            "- Nouns: People, places, things (cat, school)",
                            "- Verbs: Action words (run, eat, sleep)",
                            "- Adjectives: Description words (happy, blue)",
                            "",
                            "Why It's Important:",
                            "- Helps AI understand sentence meaning",
                            "- Makes translations more accurate",
                            "- Powers grammar checking tools",
                            "- Used in virtual assistants"
                        ]
                    },
                    {
                        title: "Name Finder (Named Entity Recognition)",
                        content: [
                            "Finding special names in text:",
                            "- Like spotting celebrities in a crowd",
                            "- Finds names of people (Harry Potter)",
                            "- Spots places (New York)",
                            "- Identifies organizations (NASA)",
                            "",
                            "Cool Uses:",
                            "- Tagging friends in social media",
                            "- Finding locations in messages",
                            "- Organizing news articles",
                            "- Helping search engines understand content"
                        ]
                    },
                    {
                        title: "Feeling Finder (Sentiment Analysis)",
                        content: [
                            "AI understanding emotions in text:",
                            "- Like being a mood detective",
                            "- Spots if text is happy, sad, or angry",
                            "- Understands emoji meanings",
                            "- Finds opinion in reviews",
                            "",
                            "Real Life Examples:",
                            "- Companies checking customer reviews",
                            "- Social media tracking trending moods",
                            "- Chat apps suggesting emoji",
                            "- Games adapting to player feedback"
                        ]
                    },
                    {
                        title: "Word Relationships (Word Embeddings)",
                        content: [
                            "Teaching AI word meanings:",
                            "- Like making a word map in space",
                            "- Similar words stay close together",
                            "- Example: 'cat' is closer to 'dog' than to 'car'",
                            "",
                            "Cool Things It Can Do:",
                            "- Find similar words",
                            "- Understand word relationships",
                            "- Help with autocomplete",
                            "- Power recommendation systems",
                            "",
                            "Think of it like:",
                            "- Words playing on a playground",
                            "- Friends (similar words) stay together",
                            "- Different groups play separately",
                            "- AI learns who plays with whom!"
                        ]
                    },
                    {
                        title: "Story Shortener (Text Summarization)",
                        content: [
                            "AI making long text shorter:",
                            "- Like making movie trailers for text",
                            "- Keeps important information",
                            "- Removes less important parts",
                            "- Makes reading faster",
                            "",
                            "Where We See It:",
                            "- News article summaries",
                            "- Book chapter summaries",
                            "- Movie plot descriptions",
                            "- Long message previews in chat apps"
                        ]
                    },
                    {
                        title: "Text Sorting (Classification)",
                        content: [
                            "AI organizing text into groups:",
                            "- Like sorting mail into different boxes",
                            "- Puts similar texts together",
                            "- Learns what makes texts different",
                            "",
                            "Examples in Real Life:",
                            "- Email spam filters",
                            "- News article categories",
                            "- Social media content filters",
                            "- Customer service message sorting",
                            "",
                            "How It Works:",
                            "- Reads the text",
                            "- Finds important clues",
                            "- Matches with similar texts",
                            "- Puts in the right group"
                        ]
                    },
                    {
                        title: "Computer Vision - The Details",
                        content: [
                            "How Computers See Images:",
                            "- Like looking at tiny colored dots",
                            "- Each dot has a color value",
                            "- Millions of dots make one picture",
                            "",
                            "Steps in Computer Vision:",
                            "1. Getting the Picture:",
                            "   - Like taking a photo",
                            "   - Converting light into numbers",
                            "",
                            "2. Finding Edges and Shapes:",
                            "   - Like tracing the outline in a coloring book",
                            "   - Spotting where colors change",
                            "",
                            "3. Recognizing Objects:",
                            "   - Like solving a puzzle",
                            "   - Matching shapes to known objects",
                            "",
                            "Real World Uses:",
                            "- Face unlock on phones",
                            "- Self-driving cars seeing roads",
                            "- Robot helpers finding things",
                            "- Medical image analysis"
                        ]
                    },
                    {
                        title: "Neural Networks - A Closer Look",
                        content: [
                            "How Neural Networks Learn:",
                            "1. Getting Information:",
                            "   - Like your eyes seeing something",
                            "   - Takes in data (pictures, text, numbers)",
                            "",
                            "2. Processing in Layers:",
                            "   - Like passing messages between friends",
                            "   - Each layer looks for different things",
                            "   - Simple to complex understanding",
                            "",
                            "3. Making Decisions:",
                            "   - Like your brain deciding what you saw",
                            "   - Combines all the information",
                            "   - Makes a final choice",
                            "",
                            "Real World Example:",
                            "- Photo Recognition:",
                            "  * First layer: sees lines and colors",
                            "  * Middle layers: spots shapes and patterns",
                            "  * Final layers: recognizes objects",
                            "",
                            "Just Like Your Brain:",
                            "- Learns from examples",
                            "- Gets better with practice",
                            "- Can spot patterns",
                            "- Makes smart guesses"
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: "programming-basics",
        title: "Problem Solving through Programming",
        sections: [
            {
                type: "slides",
                title: "Why Do We Need Programming?",
                content: [
                    {
                        title: "What is Programming?",
                        content: [
                            "Programming is like giving instructions to a computer",
                            "Just like you follow a recipe to bake a cake, computers follow programs to solve problems",
                            "Programs help us automate tasks and solve complex problems quickly",
                            "Think of programming as teaching a computer to help us!"
                        ],
                        demo: {
                            title: "Robot Instructions Game",
                            description: "Guide a robot through a maze using simple commands"
                        }
                    },
                    {
                        title: "Programming in Real Life",
                        content: [
                            "Programming is everywhere in our daily life:",
                            "- Your video games need programming",
                            "- Your phone apps are made with programming",
                            "- Smart home devices use programming",
                            "- Even your microwave uses programming!",
                            "",
                            "Real Examples:",
                            "- Instagram filters that make you look cool",
                            "- Calculator that helps with math",
                            "- Games that remember your high score",
                            "- Chat apps that connect you with friends"
                        ]
                    },
                    {
                        title: "How Computers Think",
                        content: [
                            "Computers are like very obedient but simple friends:",
                            "- They do exactly what you tell them",
                            "- They never get tired of repeating tasks",
                            "- They can't guess what you mean",
                            "- They need very clear instructions",
                            "",
                            "For example:",
                            "- If you say 'make a sandwich', they won't know how",
                            "- You need to tell them every tiny step",
                            "- Like: get bread, open jar, pick up knife...",
                            "- This is why we need programming!"
                        ]
                    },
                    {
                        title: "Breaking Down Problems",
                        content: [
                            "Think of problems like big LEGO models:",
                            "- Start with the big picture",
                            "- Break it into smaller pieces",
                            "- Solve one piece at a time",
                            "- Put everything together",
                            "",
                            "Example: Cleaning Your Room",
                            "1. Look at the mess (understand)",
                            "2. Plan what to clean first",
                            "3. Sort items into groups",
                            "4. Put each group away",
                            "5. Check if everything's clean"
                        ]
                    },
                    {
                        title: "Common Problem-Solving Mistakes",
                        content: [
                            "Watch out for these common mistakes:",
                            "- Rushing to solve without understanding",
                            "- Making things too complicated",
                            "- Not testing your solution",
                            "- Giving up too quickly",
                            "",
                            "Remember:",
                            "- Take your time to understand",
                            "- Keep solutions simple",
                            "- Test your ideas",
                            "- Learn from mistakes",
                            "- Ask for help when needed"
                        ]
                    },
                    {
                        title: "Problem Solving Steps",
                        content: [
                            "1. Understand the Problem:",
                            "- What are we trying to solve?",
                            "- What information do we have?",
                            "- What result do we want?",
                            "",
                            "2. Plan the Solution:",
                            "- Break the big problem into smaller steps",
                            "- Think about different ways to solve it",
                            "- Choose the best approach",
                            "",
                            "3. Write the Solution:",
                            "- Create step-by-step instructions",
                            "- Use algorithms and flowcharts",
                            "",
                            "4. Test and Fix:",
                            "- Try out your solution",
                            "- Find and fix any problems",
                            "- Make it better!"
                        ],
                        demo: {
                            title: "Problem Solver",
                            description: "Interactive puzzle to practice problem-solving steps"
                        }
                    },
                    {
                        title: "What is an Algorithm?",
                        content: [
                            "An algorithm is a step-by-step plan to solve a problem:",
                            "- Like a detailed recipe for the computer",
                            "- Must be clear and specific",
                            "- Should work for similar problems",
                            "",
                            "Real-Life Algorithm Examples:",
                            "- Making a sandwich",
                            "- Tying shoelaces",
                            "- Finding a book in the library",
                            "- Playing a game"
                        ],
                        demo: {
                            title: "Algorithm Builder",
                            description: "Create algorithms for everyday tasks"
                        }
                    },
                    {
                        title: "Fun with Algorithms",
                        content: [
                            "Algorithms are like cooking recipes:",
                            "- They have ingredients (inputs)",
                            "- They have steps to follow",
                            "- They give you something at the end (output)",
                            "",
                            "Fun Algorithm Examples:",
                            "1. Finding your favorite book:",
                            "   - Go to correct shelf",
                            "   - Look for author's name",
                            "   - Check book titles",
                            "",
                            "2. Scoring in a game:",
                            "   - Hit the target",
                            "   - Calculate points",
                            "   - Update score",
                            "   - Check for high score"
                        ]
                    },
                ]
            },
            {
                type: "quiz",
                title: "Quiz: Programming Basics",
                questions: [
                    {
                        question: "What is the first step in problem solving?",
                        options: ["Write the solution", "Test the solution", "Understand the problem", "Create a flowchart"],
                        correctAnswer: 2
                    },
                    {
                        question: "Which flowchart symbol is used for decisions?",
                        options: ["Rectangle", "Oval", "Diamond", "Parallelogram"],
                        correctAnswer: 2
                    },
                    {
                        question: "What does an algorithm need to be?",
                        options: ["Complicated", "Clear and specific", "Long", "Artistic"],
                        correctAnswer: 1
                    },
                    {
                        question: "Which shape shows the start and end in a flowchart?",
                        options: ["Rectangle", "Oval", "Diamond", "Arrow"],
                        correctAnswer: 1
                    },
                    {
                        question: "What is the purpose of arrows in a flowchart?",
                        options: ["To make it pretty", "To show flow direction", "To fill space", "To add color"],
                        correctAnswer: 1
                    }
                ]
            },
            {
                type: "slides",
                title: "Flowcharts - Visual Problem Solving",
                content: [
                    {
                        title: "Introduction to Flowcharts",
                        content: [
                            "Flowcharts are visual maps of our algorithms:",
                            "- Show the steps using special shapes",
                            "- Connect steps with arrows",
                            "- Help us see the whole process",
                            "",
                            "Why Use Flowcharts?",
                            "- Easy to understand",
                            "- Help find problems",
                            "- Great for planning",
                            "- Universal language"
                        ]
                    },
                    {
                        title: "Flowchart Symbols",
                        content: [
                            "Start/End (Oval):",
                            "- Shows where the process begins and ends",
                            "",
                            "Process (Rectangle):",
                            "- Shows an action or calculation",
                            "",
                            "Decision (Diamond):",
                            "- Shows a yes/no question",
                            "- Creates different paths",
                            "",
                            "Input/Output (Parallelogram):",
                            "- Shows data going in or out",
                            "",
                            "Arrows:",
                            "- Show the flow direction",
                            "- Connect the steps"
                        ],
                        demo: {
                            title: "Symbol Master",
                            description: "Learn flowchart symbols through a matching game"
                        }
                    },
                    {
                        title: "More About Flowcharts",
                        content: [
                            "Flowcharts are like maps for your program:",
                            "- They show the path your program takes",
                            "- Help you find shortcuts and dead ends",
                            "- Make it easy to explain your idea to others",
                            "",
                            "Real-World Flowchart Example:",
                            "Getting Ready for School:",
                            "- Wake up (Start)",
                            "- Is it a school day? (Decision)",
                            "- Brush teeth (Process)",
                            "- Get dressed (Process)",
                            "- Eat breakfast (Process)",
                            "- Check backpack (Process)",
                            "- Leave for school (End)"
                        ]
                    }
                ]
            },
            {
                type: "slides",
                title: "Hands-on Activities",
                content: [
                    {
                        title: "Daily Life Algorithms",
                        content: [
                            "Let's create algorithms for everyday tasks:",
                            "- Making a cup of tea",
                            "- Getting ready for school",
                            "- Playing your favorite game",
                            "Practice breaking down tasks into steps!"
                        ],
                        demo: {
                            title: "Task Master",
                            description: "Create and share algorithms for daily tasks"
                        }
                    },
                    {
                        title: "Flowchart Challenge",
                        content: [
                            "Create flowcharts for different scenarios:",
                            "- Deciding what to wear based on weather",
                            "- Finding the largest number among three numbers",
                            "- Planning a birthday party",
                            "Use the correct symbols and connect them properly!"
                        ],
                        demo: {
                            title: "Flowchart Builder",
                            description: "Interactive tool to create and test flowcharts"
                        }
                    }
                ]
            },
            {
                type: "quiz",
                title: "Quiz: Problem Solving",
                questions: [
                    {
                        question: "Which of these is NOT a problem-solving step?",
                        options: ["Understand the problem", "Plan the solution", "Skip testing", "Write the solution"],
                        correctAnswer: 2
                    },
                    {
                        question: "What shape is used for processing steps in a flowchart?",
                        options: ["Circle", "Rectangle", "Triangle", "Star"],
                        correctAnswer: 1
                    },
                    {
                        question: "Why do we use flowcharts?",
                        options: ["To make the problem harder", "To visualize the solution", "To avoid planning", "To waste time"],
                        correctAnswer: 1
                    },
                    {
                        question: "What comes after planning in problem solving?",
                        options: ["Understanding", "Testing", "Writing the solution", "Giving up"],
                        correctAnswer: 2
                    },
                    {
                        question: "Which is an example of an everyday algorithm?",
                        options: ["Sleeping", "Making breakfast", "Watching TV", "Daydreaming"],
                        correctAnswer: 1
                    }
                ]
            },
        ]
    },
    {
        id: "python-basics",
        title: "Python Programming for AI",
        sections: [
            {
                type: "slides",
                title: "Introduction to Python",
                content: [
                    {
                        title: "What is Python?",
                        content: [
                            "Python is like a friendly language that helps us talk to computers:",
                            "- It's one of the easiest programming languages to learn",
                            "- Named after the Python snake? No! It's named after a TV show!",
                            "- It's the most popular language for AI and Machine Learning",
                            "",
                            "Why Python is Special:",
                            "- It reads almost like English",
                            "- Makes complex things simple",
                            "- Has lots of helpful tools ready to use",
                            "- Perfect for beginners and experts alike!"
                        ],
                        demo: {
                            title: "Hello Python!",
                            description: "Write your first Python program"
                        }
                    },
                    {
                        title: "Variables - Python's Memory Boxes",
                        content: [
                            "Variables are like labeled boxes that store things:",
                            "- Give them any name you want (like 'age' or 'name')",
                            "- Put different types of things inside",
                            "- Change what's inside anytime",
                            "",
                            "Real World Example:",
                            "- Think of a toy box:",
                            "  * The box is your variable",
                            "  * The label is the variable name",
                            "  * The toys inside are the values",
                            "  * You can empty it and put new toys in!"
                        ],
                        demo: {
                            title: "Variable Explorer",
                            description: "Interactive demo to create and change variables"
                        }
                    },
                    {
                        title: "Numbers in Python",
                        content: [
                            "Python loves to work with numbers:",
                            "- Whole numbers (integers): 1, 2, 3, -5",
                            "- Decimal numbers (float): 3.14, -0.5",
                            "",
                            "Fun Things with Numbers:",
                            "- Add them: 5 + 3",
                            "- Subtract them: 10 - 4",
                            "- Multiply them: 6 * 2",
                            "- Divide them: 8 / 2",
                            "",
                            "Real World Example:",
                            "- Calculator app",
                            "- Scoring in games",
                            "- Counting coins in your piggy bank"
                        ],
                        demo: {
                            title: "Number Games",
                            description: "Play with Python numbers and operations"
                        }
                    },
                    {
                        title: "Strings - Working with Text",
                        content: [
                            "Strings are like text messages in Python:",
                            "- Any text between quotes: 'Hello' or \"World\"",
                            "- Can include letters, numbers, symbols",
                            "- Join them together (concatenation)",
                            "",
                            "Fun with Strings:",
                            "- Join names: 'Super' + 'hero' = 'Superhero'",
                            "- Repeat text: 'Ha' * 3 = 'HaHaHa'",
                            "- Make them LOUD or quiet",
                            "",
                            "Real World Examples:",
                            "- Chat messages",
                            "- Player names in games",
                            "- Writing stories"
                        ],
                        demo: {
                            title: "String Magic",
                            description: "Create fun messages with Python strings"
                        }
                    },
                    {
                        title: "Lists - Python's Collection Box",
                        content: [
                            "Lists are like a toy box that can hold many things:",
                            "- Store multiple items in order",
                            "- Mix different types of items",
                            "- Add or remove items easily",
                            "",
                            "Example List:",
                            "- Shopping list: ['apples', 'milk', 'bread']",
                            "- Favorite numbers: [7, 13, 42]",
                            "- Mixed items: ['Pizza', 5, 'cookies', True]",
                            "",
                            "Real World Examples:",
                            "- Todo lists",
                            "- Collection of game scores",
                            "- Playlist of songs"
                        ],
                        demo: {
                            title: "List Builder",
                            description: "Create and modify Python lists"
                        }
                    },
                    {
                        title: "Input and Output - Talking to Python",
                        content: [
                            "How to chat with Python:",
                            "",
                            "Output (Python talking to us):",
                            "- print('Hello!') shows messages",
                            "- Like a robot speaking to us",
                            "",
                            "Input (Us talking to Python):",
                            "- name = input('What's your name?')",
                            "- Like asking the robot a question",
                            "",
                            "Real World Examples:",
                            "- Games asking for player names",
                            "- Quiz programs",
                            "- Chat bots"
                        ],
                        demo: {
                            title: "Chat with Python",
                            description: "Interactive input/output demonstration"
                        }
                    }
                ]
            },
            {
                type: "quiz",
                title: "Quiz: Python Basics",
                questions: [
                    {
                        question: "What is a variable in Python?",
                        options: ["A type of snake", "A container for storing data", "A mathematical equation", "A computer game"],
                        correctAnswer: 1
                    },
                    {
                        question: "Which of these is a valid Python string?",
                        options: ["123", "'Hello World'", "3.14", "[1, 2, 3]"],
                        correctAnswer: 1
                    },
                    {
                        question: "What will print('Hi' * 3) show?",
                        options: ["Hi3", "HiHiHi", "Hi Hi Hi", "Error"],
                        correctAnswer: 1
                    },
                    {
                        question: "Which is a correct way to create a list in Python?",
                        options: ["(1, 2, 3)", "{1, 2, 3}", "[1, 2, 3]", "1, 2, 3"],
                        correctAnswer: 2
                    },
                    {
                        question: "What does the input() function do?",
                        options: ["Shows text on screen", "Asks user for information", "Creates a variable", "Makes a list"],
                        correctAnswer: 1
                    }
                ]
            },
            {
                type: "slides",
                title: "Fun with Python",
                content: [
                    {
                        title: "Let's Make a Simple Chat Bot!",
                        content: [
                            "Step by step guide to make a friendly bot:",
                            "1. Ask for user's name",
                            "2. Greet them personally",
                            "3. Ask about their day",
                            "4. Respond to their answer",
                            "",
                            "This teaches us:",
                            "- Using variables",
                            "- Working with strings",
                            "- Input and output",
                            "- Making decisions"
                        ],
                        demo: {
                            title: "Build-A-Bot",
                            description: "Create your own simple chatbot"
                        }
                    },
                    {
                        title: "Number Games with Python",
                        content: [
                            "Let's create fun number games:",
                            "- Guess the number",
                            "- Simple calculator",
                            "- Score keeper",
                            "",
                            "This teaches us:",
                            "- Working with numbers",
                            "- Using variables",
                            "- Input/output",
                            "- Basic math operations"
                        ],
                        demo: {
                            title: "Number Wizard",
                            description: "Interactive number games in Python"
                        }
                    }
                ]
            },
            {
                type: "quiz",
                title: "Quiz: Python in Action",
                questions: [
                    {
                        question: "What happens when you add two strings in Python?",
                        options: ["They multiply", "They join together", "They disappear", "They become numbers"],
                        correctAnswer: 1
                    },
                    {
                        question: "How do you show text on the screen in Python?",
                        options: ["show()", "print()", "display()", "write()"],
                        correctAnswer: 1
                    },
                    {
                        question: "Which symbol is used for multiplication in Python?",
                        options: ["x", "*", "×", "#"],
                        correctAnswer: 1
                    },
                    {
                        question: "What can you store in a Python list?",
                        options: ["Only numbers", "Only text", "Only one type of item", "Different types of items"],
                        correctAnswer: 3
                    },
                    {
                        question: "What's the best way to get user input in Python?",
                        options: ["input()", "ask()", "get()", "read()"],
                        correctAnswer: 0
                    }
                ]
            }
        ]
    },
    {
        id: "python-quizzes-practical",
        title: "Quizzes and Practical",
        sections: [
            {
                type: "slides",
                title: "Programming Quiz I",
                content: [
                    {
                        title: "Python Programming Quiz I",
                        content: [
                            ""
                        ],
                        demo: {
                            title: "Python Programming",
                            description: "Python programming examples"
                        }
                    }
                ]
            },
            {
                type: "slides",
                title: "Programming Quiz II",
                content: [
                    {
                        title: "Python Programming Quiz II",
                        content: [
                            ""
                        ],
                        demo: {
                            title: "Python Programming 2",
                            description: "Python programming examples 2"
                        }
                    }
                ]
            },
            {
                type: "slides",
                title: "Programming Quiz III",
                content: [
                    {
                        title: "Python Programming Quiz III",
                        content: [
                            ""
                        ],
                        demo: {
                            title: "Python Programming 3",
                            description: "Python programming examples 3"
                        }
                    }
                ]
            },
        ]
    }
];

export function getLecture(id) {
    return lectures.find(lecture => lecture.id === id);
}