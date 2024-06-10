//@ts-nocheck
"use client";
import { SquareGanttChart, Users, UsersRound } from "lucide-react";
import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
const CountUpInfo = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <>
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <section className="p-3 my-6 bg-gray-100 text-gray-800">
          <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-3">
            <div className="flex items-center  p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
              <SquareGanttChart className="w-16 h-16 text-[#1BA152]" />
              <div className="">
                <p className="text-3xl text-[#37517E]  font-semibold leading-none">
                  {counterOn && <CountUp start={0} end={100} duration={2.75} />}
                  +
                </p>
                <p className="capitalize  mt-1 text-[18px]">Projects</p>
              </div>
            </div>
            <div className="flex items-center  p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
              <Users className="w-16 h-16 text-[#1BA152]" />
              <div className="">
                <p className="text-3xl text-[#37517E]  font-semibold leading-none">
                  {counterOn && (
                    <CountUp start={100} end={200} duration={2.75} />
                  )}
                  +
                </p>
                <p className="capitalize  mt-1 text-[18px]">Clients</p>
              </div>
            </div>
            <div className="flex items-center  p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
              <UsersRound className="w-16 h-16 text-[#1BA152]" />
              <div className="">
                <p className="text-3xl text-[#37517E]  font-semibold leading-none">
                  {counterOn && <CountUp start={0} end={15} duration={2.75} />}+
                </p>
                <p className="capitalize  mt-1 text-[18px]">Team Members</p>
              </div>
            </div>
          </div>
        </section>
      </ScrollTrigger>
    </>
  );
};

export default CountUpInfo;
