// ═══════════════════════════════════════════════════════════════════════════
// CIVIL WAR MASTERY - DATA
// All study content and quiz questions
// ═══════════════════════════════════════════════════════════════════════════

const studyData = [
    // ─────────────────────────────────────────────────────────────────────────
    // PART 1: CAUSES (1840-1861)
    // ─────────────────────────────────────────────────────────────────────────
    {
        id: 1,
        phase: 'causes',
        title: "Opening of Japan / Perry",
        subtitle: "1853 - Global Expansion",
        tag: "Foreign Policy",
        desc: "Commodore Matthew Perry led a naval expedition to Japan, using 'Gunboat Diplomacy' to force the isolationist nation to sign the Treaty of Kanagawa. While not directly about slavery, this highlights the aggressive 1850s mindset of <strong>Manifest Destiny</strong>: the U.S. believed it had a God-given right to expand its political and economic influence across the Pacific. This same hunger for expansion is what drove settlers West, precipitating the crisis over slavery's spread.",
        question: "Connection to Civil War?",
        answer: "Expansion abroad mirrors expansion at home. The desire for new markets and land drove the US West, forcing the slavery issue."
    },
    {
        id: 2,
        phase: 'causes',
        title: "James K. Polk",
        subtitle: "The 'Manifest Destiny' President",
        tag: "Person",
        desc: "Polk (1845-1849) was a 'Dark Horse' candidate who ran on a platform of territorial expansion. He fulfilled his promises by settling the Oregon boundary with Britain and instigating a war with Mexico to seize California. He is often seen as the most successful one-term president, but his success was a poison pill: by adding millions of acres of new land, he destroyed the delicate balance of power between free and slave states kept by the Missouri Compromise.",
        question: "Why is he a cause of the war?",
        answer: "His land acquisitions (Mexican Cession) destroyed the balance of power between free and slave states."
    },
    {
        id: 3,
        phase: 'causes',
        title: "The War with Mexico",
        subtitle: "1846-1848",
        tag: "Conflict",
        desc: "Sparked by a border dispute in Texas, this war was highly controversial. Northern Whigs (like a young Abraham Lincoln) opposed it as a Southern conspiracy to expand slavery ('Slave Power'). The U.S. victory resulted in the <strong>Treaty of Guadalupe Hidalgo</strong>, giving the U.S. the American Southwest. Crucially, this war served as the 'training ground' for almost all major Civil War generals (Grant, Lee, Jackson) who learned to fight together before fighting each other.",
        question: "Political Consequence?",
        answer: "It reopened the slavery debate. Wilmot Proviso was proposed immediately to ban slavery in this new land."
    },
    {
        id: 4,
        phase: 'causes',
        title: "Wilmot Proviso",
        subtitle: "The Failed Law",
        tag: "Legislation",
        desc: "Proposed by David Wilmot immediately after the war began, this bill sought to ban slavery in <em>any</em> territory gained from Mexico. It passed the House of Representatives multiple times (where the North had more population) but was always blocked in the Senate (where the South maintained parity). This proved that the political system was no longer dividing by party (Whig vs. Democrat), but by section (North vs. South).",
        question: "Significance?",
        answer: "It signaled that the political parties were splitting along sectional lines (North vs South) rather than party lines (Whig vs Democrat)."
    },
    {
        id: 5,
        phase: 'causes',
        title: "Free Soil Party",
        subtitle: "Free Soil, Free Labor, Free Men",
        tag: "Politics",
        desc: "Emerging in 1848, this party represented a 'middle ground' between abolitionists and pro-slavery advocates. Their platform was <strong>non-extension</strong>: keep slavery where it is, but do not let it expand West. Their motivation was often economic and racist rather than moral—they wanted the West preserved for 'free white labor' without competition from unpaid slave labor. They eventually merged into the Republican Party.",
        question: "Who absorbed them?",
        answer: "Most joined the new Republican Party in 1854."
    },
    {
        id: 6,
        phase: 'causes',
        title: "Compromise of 1850",
        subtitle: "The Great Compromise",
        tag: "Legislation",
        desc: "Engineered by Henry Clay to solve the crisis of California's statehood. It had four main parts: 1) California enters as a Free State (tipping the Senate balance to the North). 2) The rest of the Mexican Cession uses <strong>Popular Sovereignty</strong> (voting) to decide on slavery. 3) Slave <em>trade</em> is banned in D.C. 4) A harsh new <strong>Fugitive Slave Act</strong> is passed. It was meant to save the Union, but it only bought a decade of time while increasing tensions.",
        question: "Why did it fail to bring peace?",
        answer: "The Fugitive Slave Act enraged the North, making compromise impossible."
    },
    {
        id: 7,
        phase: 'causes',
        title: "Fugitive Slave Act",
        subtitle: "1850 - The Hated Law",
        tag: "Legislation",
        desc: "The most controversial part of the Compromise of 1850. It federalized slave-catching, requiring Northern citizens to assist marshals and denying accused runaways the right to a trial or testimony. It effectively legalized kidnapping free Black people in the North. This forced moderate Northerners to confront the brutality of slavery in their own streets, radicalizing many into abolitionism (and inspiring <em>Uncle Tom's Cabin</em>).",
        question: "Reaction?",
        answer: "Massive resistance in the North. It made slavery real to Northerners who had ignored it before."
    },
    {
        id: 8,
        phase: 'causes',
        title: "Kansas-Nebraska Act",
        subtitle: "1854 - Repealing the Line",
        tag: "Legislation",
        desc: "Stephen Douglas wanted a transcontinental railroad through Chicago, so he needed to organize the Kansas territory. To get Southern votes, he proposed <strong>Popular Sovereignty</strong>—letting settlers vote on slavery there. This explicitly repealed the Missouri Compromise Line (36°30'), which had kept peace for 34 years. The result was chaos: the Whig party collapsed, the Republican party was born, and 'Bleeding Kansas' became a prelude to civil war.",
        question: "Result?",
        answer: "'Bleeding Kansas' (violence) and the creation of the Republican Party."
    },
    {
        id: 9,
        phase: 'causes',
        title: "Dred Scott Decision",
        subtitle: "1857 - Citizenship Denied",
        tag: "Court Case",
        desc: "In <em>Scott v. Sandford</em>, Chief Justice Taney issued a sweeping pro-slavery ruling. He stated that: 1) Black people (free or slave) were not citizens and could not sue in court. 2) Slaves were property, and the government cannot take property without due process. 3) Therefore, the Missouri Compromise was unconstitutional, and Congress had <strong>no power</strong> to ban slavery in the territories. This seemingly made the Republican platform illegal.",
        question: "Impact on the North?",
        answer: "It made the Republican platform (stopping slavery expansion) unconstitutional, convincing the North the Court was corrupt."
    },
    {
        id: 10,
        phase: 'causes',
        title: "John Brown & Harpers Ferry",
        subtitle: "1859 - The Raid",
        tag: "Event",
        desc: "John Brown was a radical religious abolitionist who believed violence was necessary to end slavery. He led a raid on the federal arsenal at Harpers Ferry, hoping to arm slaves and start a revolution. He failed and was hanged. The North mourned him as a martyr (church bells rang), which terrified the South. Southerners became convinced that the North was plotting not just to end slavery, but to murder white Southerners in their sleep.",
        question: "North vs South view?",
        answer: "North: Martyr. South: Terrorist. The South believed the North wanted to murder them."
    },
    {
        id: 11,
        phase: 'causes',
        title: "Election of 1860",
        subtitle: "Lincoln's Victory",
        tag: "Politics",
        desc: "The Democratic Party split into Northern and Southern factions, allowing Abraham Lincoln (Republican) to win with only 40% of the popular vote and <strong>zero</strong> Southern electoral votes. His platform was not abolition, but non-extension (containment). However, the South believed he was a secret abolitionist. Viewing his election as a fundamental threat to their society, South Carolina seceded in December, followed by six others.",
        question: "Immediate Result?",
        answer: "South Carolina seceded, followed by the rest of the Deep South."
    },

    // ─────────────────────────────────────────────────────────────────────────
    // PART 2: THE WAR (1861-1865)
    // ─────────────────────────────────────────────────────────────────────────
    {
        id: 12,
        phase: 'war',
        title: "North/South Advantages",
        subtitle: "Tale of the Tape",
        tag: "Strategy",
        desc: "The Union (North) had overwhelming material advantages: 90% of manufacturing, 2x the population, and a navy. Their strategy was the <strong>Anaconda Plan</strong> (blockade and squeeze). The Confederacy (South) had the advantage of fighting a defensive war on friendly terrain with superior military leadership (Robert E. Lee). Their strategy was <strong>Attrition</strong>: just hold out until the North gets tired of fighting and votes Lincoln out.",
        question: "Why did the South think they could win?",
        answer: "They didn't have to conquer the North; they just had to outlast the North's will to fight."
    },
    {
        id: 13,
        phase: 'war',
        title: "Foreign Intervention",
        subtitle: "King Cotton Diplomacy",
        tag: "Diplomacy",
        desc: "The Confederacy's best hope for victory was an alliance with Britain or France, who relied heavily on Southern cotton. They hoped to replicate the American Revolution (where the French helped the US). However, Britain had stockpiled cotton, and the Union threatened war if they intervened. Once the war became a crusade against slavery (after 1863), the British public would not allow their government to support the South.",
        question: "Why did Europe stay out?",
        answer: "The Emancipation Proclamation made the war about slavery, and Britain (which was anti-slavery) couldn't support the South."
    },
    {
        id: 14,
        phase: 'war',
        title: "Habeas Corpus",
        subtitle: "Suspension of Rights",
        tag: "Rights",
        desc: "Facing a potential rebellion in Maryland (which would surround D.C. in enemy territory), Lincoln suspended the writ of <em>Habeas Corpus</em>, allowing the military to arrest Confederate sympathizers without trial. Chief Justice Taney ruled this illegal (Ex parte Merryman), but Lincoln ignored him, famously asking, 'Are all the laws, but one, to go unexecuted, and the government itself to go to pieces lest that one be violated?'",
        question: "What does this show?",
        answer: "Civil liberties are often restricted during wartime for national security."
    },
    {
        id: 15,
        phase: 'war',
        title: "Battle of Antietam",
        subtitle: "1862 - Bloodiest Day",
        tag: "Battle",
        desc: "Fought in Maryland, this was Lee's first invasion of the North. It remains the single bloodiest day in American history (23,000 casualties). Militarily, it was a draw, but Lee retreated. Politically, it was a massive Union victory. It convinced Britain and France to stay out of the war and gave Lincoln the political capital to issue the Emancipation Proclamation without looking desperate.",
        question: "Why is it the turning point?",
        answer: "It allowed Lincoln to issue the Emancipation Proclamation."
    },
    {
        id: 16,
        phase: 'war',
        title: "Emancipation Proclamation",
        subtitle: "1863 - Freedom (Partial)",
        tag: "Executive Order",
        desc: "Issued as a 'military necessity' by Lincoln as Commander-in-Chief. It declared all slaves in <strong>rebelling</strong> territories free. It notably did <em>not</em> free slaves in the Union Border States (KY, MD, DE, MO) because Lincoln feared they would secede. While it didn't immediately free many people, it fundamentally transformed the war from a political struggle to save the Union into a moral crusade against slavery.",
        question: "Two major impacts?",
        answer: "1. Changed war purpose to ending slavery. 2. Allowed Black men to join the Union Army."
    },
    {
        id: 17,
        phase: 'war',
        title: "African-American Soldiers",
        subtitle: "The 54th Massachusetts",
        tag: "Military",
        desc: "The Emancipation Proclamation opened the door for Black enlistment. Over 180,000 served (10% of the Union Army). Units like the 54th Massachusetts proved their bravery in suicidal charges (like Fort Wagner). They initially faced lower pay and the threat of execution if captured by the South. Their service made it impossible for the nation to deny them citizenship after the war.",
        question: "Significance?",
        answer: "Their service proved their right to citizenship (later the 14th Amendment)."
    },
    {
        id: 18,
        phase: 'war',
        title: "Gettysburg Address",
        subtitle: "Redefining the Nation",
        tag: "Speech",
        desc: "In just two minutes, Lincoln redefined the war. He shifted the founding date of the US from the Constitution (1789) to the Declaration of Independence (1776), emphasizing that the nation was 'dedicated to the proposition that all men are created equal.' He reframed the war not just as a fight to save a political map, but as a test of whether democracy itself could survive ('government of the people, by the people, for the people').",
        question: "Core message?",
        answer: "The war is a test of whether democracy can survive. He promised a 'new birth of freedom.'"
    },
    {
        id: 19,
        phase: 'war',
        title: "Women During the War",
        subtitle: "Nurses and Spies",
        tag: "Society",
        desc: "With men at war, women stepped into new roles. In the South, they managed plantations. In the North, they worked in factories and government offices. Women like Dorothea Dix and Clara Barton (founder of the American Red Cross) transformed nursing from a lowly job into a respected profession. The U.S. Sanitary Commission, run largely by women, raised millions to reduce disease in camps.",
        question: "Long term result?",
        answer: "Nursing became a female profession; it boosted the suffragette movement."
    },
    {
        id: 20,
        phase: 'war',
        title: "The Draft & NYC Riots",
        subtitle: "1863 - Dissent",
        tag: "Home Front",
        desc: "As enthusiasm for the war faded, the Union passed the Conscription Act (Draft). It contained a loophole: a man could pay $300 (a year's wages) to avoid service. This enraged working-class Irish immigrants in NYC, who feared that freed Southern slaves would migrate North and take their jobs. The result was a 4-day race riot where mobs attacked draft offices, wealthy homes, and African American citizens.",
        question: "Underlying cause?",
        answer: "Class anger ('Rich man's war') and racial tension (fear of job competition)."
    },
    {
        id: 21,
        phase: 'war',
        title: "The Copperheads",
        subtitle: "Snakes in the Grass",
        tag: "Politics",
        desc: "Also known as 'Peace Democrats,' these were Northerners (mostly from the Midwest) who opposed the war and Lincoln's 'tyranny.' Led by Clement Vallandigham, they favored an immediate armistice and negotiation with the South. They represented the significant internal political dissent Lincoln faced; he wasn't just fighting the South, he was fighting for public opinion in the North.",
        question: "Lincoln's Challenge?",
        answer: "He had to fight the Confederacy on the battlefield and political enemies at home."
    },

    // ─────────────────────────────────────────────────────────────────────────
    // PART 3: RECONSTRUCTION (1865-1877)
    // ─────────────────────────────────────────────────────────────────────────
    {
        id: 22,
        phase: 'reconstruction',
        title: "Lincoln's 10% Plan",
        subtitle: "Leniency",
        tag: "Politics",
        desc: "Lincoln viewed secession as legally impossible, so he believed the South had never actually left. He wanted a lenient Reconstruction to encourage Southerners to surrender. His plan required only 10% of 1860 voters to take a loyalty oath for a state to be readmitted. He was assassinated before he could implement it, but it set up a conflict with the 'Radical Republicans' who wanted to punish the South.",
        question: "Who opposed it?",
        answer: "Radical Republicans, who wanted to punish the South and protect Black rights."
    },
    {
        id: 23,
        phase: 'reconstruction',
        title: "Freedmen's Bureau",
        subtitle: "40 Acres (No) & A School (Yes)",
        tag: "Agency",
        desc: "The first major federal welfare agency, designed to help transition 4 million slaves to freedom. It provided food, medical aid, and legal assistance. Its greatest success was education: it built thousands of schools and colleges (like Howard University), raising Black literacy rates dramatically. However, it failed to redistribute land ('40 acres and a mule') because President Johnson pardoned Confederate owners and returned their land.",
        question: "Why did Johnson hate it?",
        answer: "He felt it was federal overreach."
    },
    {
        id: 24,
        phase: 'reconstruction',
        title: "13th, 14th, 15th Amendments",
        subtitle: "The Civil War Amendments",
        tag: "Constitution",
        desc: "These permanently altered the Constitution. <strong>13th:</strong> Abolished slavery (except as punishment for crime—a loophole used later). <strong>14th:</strong> Established birthright citizenship and 'equal protection' under the law (directly overturning Dred Scott). <strong>15th:</strong> Prohibited denying the vote based on race (though it didn't guarantee the vote, allowing for poll taxes/literacy tests later).",
        question: "How to remember?",
        answer: "Free (13), Citizens (14), Vote (15)."
    },
    {
        id: 25,
        phase: 'reconstruction',
        title: "Political Machines",
        subtitle: "Boss Tweed",
        tag: "Politics",
        desc: "As the fervor of the Civil War faded, the North industrialized rapidly. Urban politics became dominated by 'Machines' like Tammany Hall in NYC. 'Bosses' provided social services (jobs, coal, housing) to desperate immigrants in exchange for their votes. While corrupt (stealing millions from taxpayers), they provided the welfare safety net that the government didn't. This focus on money and corruption distracted the North from the unfinished work of Reconstruction.",
        question: "Why is this in this unit?",
        answer: "It shows the North was moving into the Gilded Age. Corruption distracted people from the goals of Reconstruction."
    },
    {
        id: 26,
        phase: 'reconstruction',
        title: "Election of 1876",
        subtitle: "The End of Reconstruction",
        tag: "Event",
        desc: "The election between Tilden (D) and Hayes (R) was deadlocked due to disputed returns in three Southern states. In the 'Compromise of 1877,' Democrats conceded the presidency to Hayes. In return, Hayes agreed to remove the last federal troops from the South. This was the death knell for Reconstruction; without soldiers to enforce the 14th/15th Amendments, the South implemented Jim Crow segregation and disenfranchisement.",
        question: "Result for African Americans?",
        answer: "Federal protection vanished. The South instituted Jim Crow laws."
    }
];

// ═══════════════════════════════════════════════════════════════════════════
// QUIZ QUESTIONS
// ═══════════════════════════════════════════════════════════════════════════
const quizQuestions = [
    // CAUSES
    {
        tag: "Foreign Policy",
        q: "Commodore Perry's opening of Japan in 1853 is connected to the Civil War era because it illustrates:",
        options: [
            "The U.S. need for Japanese cotton.",
            "The aggressive 'Manifest Destiny' mindset of expanding American influence.",
            "The Union's attempt to find allies against the South.",
            "A distraction created by President Buchanan."
        ],
        correct: 1,
        hint: "Think about what the U.S. was doing in the West at the same time.",
        rationale: "The opening of Japan showed that the U.S. was hungry for expansion and new markets. This same hunger drove the expansion West (Texas, California), which forced the deadly political debates over slavery."
    },
    {
        tag: "Expansion",
        q: "Which President is most directly associated with 'Manifest Destiny' and starting the war with Mexico?",
        options: [
            "Abraham Lincoln",
            "James K. Polk",
            "Andrew Johnson",
            "Millard Fillmore"
        ],
        correct: 1,
        hint: "He is often called the 'Dark Horse' candidate who served only one term in the 1840s.",
        rationale: "James K. Polk was the 'Expansionist President.' He purposely provoked a war with Mexico to fulfill the idea of Manifest Destiny and acquire California."
    },
    {
        tag: "Conflict",
        q: "What was the most significant political consequence of the War with Mexico (1846-1848)?",
        options: [
            "It bankrupt the US Treasury.",
            "It united the North and South against a common enemy.",
            "It reopened the debate over slavery in the new territories.",
            "It led to the immediate abolition of slavery in Texas."
        ],
        correct: 2,
        hint: "Think about the new map of the U.S. after the war—would those new states be slave or free?",
        rationale: "Gaining the 'Mexican Cession' (CA, NV, UT, AZ) forced Congress to decide: Will these new lands be slave or free? This question tore the country apart."
    },
    {
        tag: "Legislation",
        q: "The Wilmot Proviso was a failed law that attempted to:",
        options: [
            "Ban slavery in any territory taken from Mexico.",
            "Extend the Missouri Compromise line to the Pacific.",
            "Allow slavery in California.",
            "End the war with Mexico immediately."
        ],
        correct: 0,
        hint: "It divided Congress by North vs. South, rather than by political party.",
        rationale: "David Wilmot proposed banning slavery in all land gained from Mexico. It passed the House (North) but failed in the Senate (South), proving the political parties were splitting along sectional lines."
    },
    {
        tag: "Politics",
        q: "The 'Free Soil Party' wanted to stop slavery from expanding West primarily because:",
        options: [
            "They believed slavery was a moral sin against God.",
            "They wanted to protect white laborers from competing with slave labor.",
            "They wanted to force the South to secede.",
            "They wanted equal rights for all races."
        ],
        correct: 1,
        hint: "Focus on their slogan: 'Free Soil, Free Labor, Free Men.'",
        rationale: "Their slogan was 'Free Soil, Free Labor, Free Men.' They weren't necessarily moral abolitionists; they wanted to keep the West for white workers."
    },
    {
        tag: "Legislation",
        q: "Which part of the Compromise of 1850 angered Northerners the most?",
        options: [
            "Admission of California as a free state.",
            "Banning the slave trade in D.C.",
            "The harsh new Fugitive Slave Act.",
            "Paying off Texas's debt."
        ],
        correct: 2,
        hint: "This law made Northerners part of the slave-catching system against their will.",
        rationale: "The Fugitive Slave Act forced Northerners to become slave-catchers in their own towns. It made slavery 'real' to them and radicalized many into becoming abolitionists."
    },
    {
        tag: "Legislation",
        q: "The Fugitive Slave Act of 1850 denied accused runaways which Constitutional right?",
        options: [
            "Freedom of Speech",
            "Right to bear arms",
            "Trial by jury",
            "Freedom of religion"
        ],
        correct: 2,
        hint: "It stripped away the legal process normally used to determine guilt or innocence.",
        rationale: "Accused runaways had no right to a trial or to testify. A commissioner decided their fate and was paid more ($10 vs $5) if he sent them back to slavery."
    },
    {
        tag: "Legislation",
        q: "The Kansas-Nebraska Act repealed the Missouri Compromise line by using which principle to decide slavery?",
        options: [
            "Judicial Review",
            "Popular Sovereignty",
            "Executive Order",
            "Divine Right"
        ],
        correct: 1,
        hint: "It literally means 'the people rule' or 'the people vote'.",
        rationale: "Stephen Douglas proposed 'Popular Sovereignty'—letting the settlers vote. This caused chaos and violence ('Bleeding Kansas')."
    },
    {
        tag: "Court Case",
        q: "In the Dred Scott decision, the Supreme Court ruled that:",
        options: [
            "Slavery was illegal in the North.",
            "Dred Scott was free because he lived in Wisconsin.",
            "Congress had no power to ban slavery in the territories.",
            "Popular Sovereignty was the law of the land."
        ],
        correct: 2,
        hint: "The ruling treated human beings strictly as 'property'.",
        rationale: "Chief Justice Taney ruled that slaves were property, and the government couldn't ban property in territories. This made the Republican platform unconstitutional."
    },
    {
        tag: "Event",
        q: "How did the North and South view John Brown after his raid on Harpers Ferry?",
        options: [
            "Both viewed him as a madman.",
            "North: Martyr; South: Terrorist.",
            "North: Terrorist; South: Hero.",
            "Both viewed him as a hero."
        ],
        correct: 1,
        hint: "One side rang church bells for him; the other side formed militias to defend against him.",
        rationale: "The North rang church bells for him, which terrified the South. Southerners believed the North was plotting to arm slaves and murder them."
    },
    {
        tag: "Politics",
        q: "The Election of 1860 triggered secession because:",
        options: [
            "Lincoln promised to end slavery immediately.",
            "Lincoln won without a single Southern electoral vote.",
            "The Democrats won the election.",
            "Lincoln threatened to invade South Carolina."
        ],
        correct: 1,
        hint: "The South felt they had lost their voice in the government completely.",
        rationale: "Lincoln won with only Northern votes. The South felt they had lost all political voice in the government and seceded."
    },

    // WAR
    {
        tag: "Strategy",
        q: "Which of the following was a major advantage for the South (Confederacy)?",
        options: [
            "More railroads and factories.",
            "A larger navy.",
            "Better military leadership and fighting a defensive war.",
            "A larger population."
        ],
        correct: 2,
        hint: "They didn't have to conquer the North; they just had to not lose.",
        rationale: "The South had Robert E. Lee and only had to defend their land (not conquer the North) to win."
    },
    {
        tag: "Diplomacy",
        q: "Why did 'Foreign Intervention' (help from Britain/France) never happen for the South?",
        options: [
            "Europe didn't need cotton anymore.",
            "The Emancipation Proclamation made the war about slavery.",
            "The South refused to ask for help.",
            "Britain was already at war with France."
        ],
        correct: 1,
        hint: "Britain was strongly anti-slavery and couldn't support a cause tied to it.",
        rationale: "Once Lincoln made the war about ending slavery (Emancipation Proclamation), Britain—which hated slavery—could not morally support the South."
    },
    {
        tag: "Civil Rights",
        q: "Why did Lincoln suspend 'Habeas Corpus' in Maryland?",
        options: [
            "To arrest Confederate sympathizers without trial and protect D.C.",
            "To force men to join the army.",
            "To stop the border states from voting.",
            "To close down newspapers."
        ],
        correct: 0,
        hint: "He needed to secure the capital city, which sits between Maryland and Virginia.",
        rationale: "It was controversial, but Lincoln felt he had to ignore some civil liberties to stop Maryland from seceding and surrounding the capital."
    },
    {
        tag: "Battle",
        q: "The Battle of Antietam was politically significant because:",
        options: [
            "It ended the war.",
            "It was a clear Confederate victory.",
            "It gave Lincoln the opportunity to issue the Emancipation Proclamation.",
            "Stonewall Jackson was killed."
        ],
        correct: 2,
        hint: "It gave Lincoln the 'win' he needed to make a big announcement without looking desperate.",
        rationale: "It was a strategic victory that stopped Lee's invasion. Lincoln used the good news to issue the Proclamation from a position of strength."
    },
    {
        tag: "Executive Order",
        q: "The Emancipation Proclamation freed slaves in:",
        options: [
            "The entire United States.",
            "Only the Border States.",
            "Only the territories in rebellion (Confederacy).",
            "Only Washington D.C."
        ],
        correct: 2,
        hint: "Lincoln couldn't afford to lose the support of the loyal Border States.",
        rationale: "Lincoln didn't free slaves in the loyal Border States because he was afraid they would secede. He only freed them in the South."
    },
    {
        tag: "Military",
        q: "What was a major result of African-American soldiers (like the 54th Mass) serving in the Union Army?",
        options: [
            "They were paid more than white soldiers.",
            "They were only used for cooking and cleaning.",
            "Their bravery proved they deserved citizenship.",
            "They refused to fight in the South."
        ],
        correct: 2,
        hint: "Their service made it impossible to deny them rights after the war.",
        rationale: "Their service made it politically impossible to deny them rights after the war, leading to the 14th Amendment."
    },
    {
        tag: "Speech",
        q: "In the Gettysburg Address, Lincoln referenced 'all men are created equal' to:",
        options: [
            "Remind people of the Constitution.",
            "Redefine the war as a struggle for human equality and democracy.",
            "Announce his re-election campaign.",
            "Blame the South for the war."
        ],
        correct: 1,
        hint: "He started the speech by counting back to 1776 ('Four score and seven years ago').",
        rationale: "He connected the war to the Declaration of Independence (1776), giving the war a new, higher moral purpose."
    },
    {
        tag: "Society",
        q: "How did the role of women change during the Civil War?",
        options: [
            "They were allowed to vote in federal elections.",
            "They were drafted into combat roles.",
            "They entered nursing and managed farms/businesses.",
            "They were banned from working in factories."
        ],
        correct: 2,
        hint: "Clara Barton is a famous example of this shift.",
        rationale: "Women like Clara Barton professionalized nursing. Their economic contributions helped keep both sides running."
    },
    {
        tag: "Home Front",
        q: "The NYC Draft Riots were fueled by racial tension and:",
        options: [
            "Anger that rich men could pay $300 to avoid the draft.",
            "A shortage of food in New York.",
            "Support for the Confederacy.",
            "The closing of factories."
        ],
        correct: 0,
        hint: "It was often called a 'Rich man's war, but a poor man's fight'.",
        rationale: "Poor Irish immigrants felt it was a 'Rich man's war, poor man's fight.' They rioted and attacked African Americans."
    },
    {
        tag: "Politics",
        q: "Who were the 'Copperheads'?",
        options: [
            "A type of cannon used by the Union.",
            "Northern Democrats who opposed the war and wanted peace.",
            "Southern spies in Washington.",
            "The currency used by the Confederacy."
        ],
        correct: 1,
        hint: "They were considered 'snakes in the grass' by Union supporters.",
        rationale: "They were the 'snakes in the grass'—Northerners who undermined the war effort and wanted to negotiate with the South."
    },

    // RECONSTRUCTION
    {
        tag: "Reconstruction",
        q: "Lincoln's '10% Plan' for Reconstruction was characterized by:",
        options: [
            "Harsh punishment for the South.",
            "Leniency and a quick return to the Union.",
            "Taking all land from plantation owners.",
            "Military occupation for 20 years."
        ],
        correct: 1,
        hint: "Lincoln wanted to 'bind up the nation's wounds' rather than punish.",
        rationale: "Lincoln wanted to 'bind up the nation's wounds' quickly. Radical Republicans hated this plan because they thought it was too soft."
    },
    {
        tag: "Agency",
        q: "The Freedmen's Bureau was most successful in:",
        options: [
            "Redistributing land ('40 acres and a mule').",
            "Ending racism in the South.",
            "Establishing schools and educating former slaves.",
            "Electing a Black president."
        ],
        correct: 2,
        hint: "They founded institutions like Howard University.",
        rationale: "While they failed to give land (because Johnson gave it back to whites), they built thousands of schools and colleges."
    },
    {
        tag: "Constitution",
        q: "Which amendment established birthright citizenship and 'equal protection' under the law?",
        options: [
            "13th",
            "14th",
            "15th",
            "16th"
        ],
        correct: 1,
        hint: "Remember the sequence: Free (13), Citizens (?), Vote (15).",
        rationale: "13th = Freedom. 14th = Citizenship (overturning Dred Scott). 15th = Vote."
    },
    {
        tag: "Politics",
        q: "Political Machines (like Boss Tweed's Tammany Hall) gained power by:",
        options: [
            "Rigging elections in the South.",
            "Trading social services (jobs/housing) for immigrant votes.",
            "Supporting strict temperance (anti-alcohol) laws.",
            "Opposing the railroads."
        ],
        correct: 1,
        hint: "They were corrupt, but they helped immigrants when the government wouldn't.",
        rationale: "In the Gilded Age North, machines were corrupt but provided a safety net for immigrants in exchange for political power."
    },
    {
        tag: "Event",
        q: "The Election of 1876 and the 'Compromise of 1877' resulted in:",
        options: [
            "The removal of federal troops from the South and the end of Reconstruction.",
            "A second Civil War.",
            "The impeachment of Rutherford B. Hayes.",
            "Full voting rights for women."
        ],
        correct: 0,
        hint: "The Republicans got the presidency, but the Democrats got their states back (without supervision).",
        rationale: "The Republicans got the White House, but they agreed to leave the South. This allowed the South to strip away Black rights (Jim Crow) without interference."
    }
];
