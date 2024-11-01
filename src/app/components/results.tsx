import { useMemo, useState } from "react"
import { rounded, rpe_lookup } from "./consts"
import * as marks from "./marks";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import LoadingGuide from "./loadingguide";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export interface ResultsProps {
  onerm: number,
  reps: number,
  rpe: number
}

function Results(props: ResultsProps) {
  const defaultReps = props.rpe === 10 && props.reps !== 12 ? props.reps + 1 : props.reps;
  const defaultRpe = props.rpe === 10 ? props.rpe : props.rpe + 1;
  const [targetReps, setTargetReps] = useState(defaultReps)
  const [targetRpe, setTargetRpe] = useState(defaultRpe)
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );


  const updateRpe = (e: Event, value: number | number[]) => {
    setTargetRpe(value as number)
  }
  const updateReps = (e: Event, value: number | number[]) => {
    setTargetReps(value as number)
  }

  const rpe = targetRpe
  const reps = targetReps
  const lookup = rpe_lookup
  const weight = rounded(lookup[reps][rpe] * props.onerm / 100)
  const loadDefaultKg = weight < 200;

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full md:w-1/2 lg:w-1/3 pt-3">
        <div className="flex flex-col flex-wrap -mx-3 mb-6 py-4">
          <div className="flex flex-row justify-center py-4">
            <div className=" mb-6 mr-5 md:mr-6 md:mb-0 block text-gray-700 dark:text-gray-200 text-sm font-bold">
              Target<br />Reps
            </div>
            <ThemeProvider theme={theme}>
              <Box sx={{ width: '75%' }}>
                <Slider
                  aria-label="Always visible"
                  defaultValue={defaultReps}
                  step={null}
                  marks={marks.repmarks}
                  valueLabelDisplay="on"
                  onChange={updateReps}
                  min={1}
                  max={12}
                />
              </Box>
            </ThemeProvider>
          </div>
          <div className="flex flex-row justify-center py-4">
            <div className="mb-6 mr-5 md:mr-6 md:mb-0 block text-gray-700 dark:text-gray-200 text-sm font-bold">
              Target<br />RPE
            </div>

            <ThemeProvider theme={theme}>
              <Box sx={{ width: '75%' }}>
                <Slider
                  aria-label="Always visible"
                  defaultValue={defaultRpe}
                  step={null}
                  marks={marks.rpemarks}
                  valueLabelDisplay="on"
                  onChange={updateRpe}
                  min={6}
                  max={10}
                />
              </Box>
            </ThemeProvider>
          </div>
        </div>
      </div>
      <LoadingGuide weight={weight} onerm={props.onerm} iskg={loadDefaultKg} showKgToggle={true} forceStackUi={true} />
    </div>
  )
}

export default Results
