"use client";
import { useState } from "react";

export default function OneRmCalculator() {
  const [weight, setWeight] = useState<number | undefined>(undefined);
  const updateWeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isNaN(Number.parseFloat(e.target.value))) {
      setWeight(undefined);
    } else {
      setWeight(Number.parseFloat(e.target.value));
    }
  };
  const [reps, setReps] = useState<number | undefined>(undefined);
  const updateReps = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isNaN(Number.parseInt(e.target.value))) {
      setReps(undefined);
    } else {
      setReps(Number.parseInt(e.target.value));
    }
  };
  const [onerm, setOneRm] = useState<number | undefined>(undefined);

  const doCalculate = () => {
    if (weight === undefined || reps === undefined) {
      return;
    }
    var onerm = weight * (1.0 / (0.488 + 0.538 * Math.exp(-0.075 * reps)));
    setOneRm(onerm);
  };

  const renderOneRm = () => {
    if (onerm === undefined) {
      return;
    }
    var roundedOneRm = Math.round(onerm * 100) / 100;
    return (
      <div className="py-4 mt-3 text-xl">Estimated 1RM: {roundedOneRm}</div>
    );
  };
  const renderDisclaimer = () => {
    if (reps === undefined || reps < 10) {
      return;
    }
    return (
      <div className="pl-2 text-rose-900 text-xs">
        Note: formula loses accuracy with input over 10 reps
      </div>
    );
  };
  const buttonClasses =
    "bg-blue-700 text-white font-bold py-2 px-4 mt-6 rounded";
  return (
    <div
      data-testid="calc"
      className="w-full flex flex-col justify-center md:flex-row md:justify-around align-top pt-24 sm:pt-36 px-6 md:px-0"
    >
      <div className="flex flex-col w-full md:w-1/3">
        <label
          htmlFor="weight"
          className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2"
        >
          Weight
        </label>
        <input
          id="weight"
          type="number"
          inputMode="decimal"
          pattern="[0-9]+([,\.][0-9]+)?"
          value={weight || ""}
          onChange={updateWeight}
          className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        ></input>

        <label
          htmlFor="reps"
          className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2"
        >
          Reps til failure
        </label>
        <input
          id="reps"
          type="number"
          inputMode="numeric"
          pattern="[0-9]+([,\.][0-9]+)?"
          value={reps || ""}
          onChange={updateReps}
          className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        ></input>
        {renderDisclaimer()}

        <button
          onClick={doCalculate}
          className={buttonClasses}
          title={"Calculate 1RM"}
        >
          Calculate
        </button>
        {renderOneRm()}
      </div>
    </div>
  );
}
