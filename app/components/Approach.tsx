"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";


const Approach = () => {
    return (
        <section className="w-full py-20">
            <h1 className="heading">Want to know more about<span className="text-purple"> Me ?</span></h1>
            <p className='text-white-200 md:mt-10 my-5 text-center'>
                Hover on cards!
            </p>
            <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4">
                <Card title="Every challenge is an opportunity to learn and grow" description="I see every problem as a chance to expand my skills and think creatively. For me, it's not just about fixing issues—it's about learning, refining, and innovating.
                 Whether debugging or designing, each challenge helps me grow both personally and professionally" icon={<AceternityIcon order="What I believe" />}>
                    <CanvasRevealEffect
                        animationSpeed={5.1}
                        containerClassName="bg-emerald-900"
                    />
                </Card>
                <Card title="Quietly coding with a side of humor" description="I may be a bit shy, but I bring strong technical skills, a love for problem-solving, and a team player attitude (even if I’m quieter in meetings). 
                Whether delivering bug-free code (fingers crossed!) or quietly laughing at jokes, I’m all about getting things done—with a subtle sense of humor." icon={<AceternityIcon order="What I bring to table" />}>
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-red-600"
                        colors={[
                            [236, 72, 153],
                            [232, 121, 249],
                        ]}
                        dotSize={2}
                    />

                </Card>
                <Card title="Learning, leading, and innovating" description="I’m all about mastering new tech, taking on leadership roles , and working on projects that make a difference. 
                My goal? To be a developer who not only writes code but also inspires teams to create awesome solutions." icon={<AceternityIcon order="My vision" />}>
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-sky-600"
                        colors={[[125, 211, 252]]}
                    />
                </Card>
            </div>
        </section>
    );
}

const Card = ({
    title,
    icon,
    children,
    description,
}: {
    title: string;
    icon: React.ReactNode;
    children?: React.ReactNode;
    description: string;
}) => {
    const [hovered, setHovered] = React.useState(false);
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl"
        >
          

            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="h-full w-full absolute inset-0"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative z-20">
                <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
                    {icon}
                </div>
                <h2 className="dark:text-white text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center">
                    {title}
                </h2>
                <h2 className="text-sm dark:text-white opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center" style={{ color: '#e4ecff' }}>
                    {description}
                </h2>
            </div>
        </div>
    );
};

const AceternityIcon = ({ order }: { order: string }) => {
    return (
        <div>  <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                {order}
            </span>
        </button></div>

    );
};

export default Approach;
