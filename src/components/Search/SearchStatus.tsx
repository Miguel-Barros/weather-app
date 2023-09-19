import checkWeather from "@/helpers/checkWeather"
import Image from "next/image"
import React from "react"

interface SearchStatusProps {
  temperature: string | number
  type?: "C" | "F"
  description: string
}

export function SearchStatus({
  temperature,
  type = "C",
  description,
}: SearchStatusProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src={`/assets/${checkWeather(description)}.png`}
        alt="Status image"
        width={180}
        height={180}
      />
      <div className="mt-5 flex flex-col gap-3">
        <p className="flex items-start text-6xl font-bold">
          {parseInt(temperature as string)}
          <span>
            <span className="absolute flex text-start text-sm">
              º <span className="self-end text-xl">{type}</span>
            </span>
          </span>
        </p>
        <p className="text-md text-center">{description}</p>
      </div>
    </div>
  )
}
