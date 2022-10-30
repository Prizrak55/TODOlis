import { Accordion, AccordionDetails, AccordionSummary, Box, Button, ButtonGroup, Checkbox, CheckboxProps, ClickAwayListener, Collapse, createTheme, Dialog, DialogTitle, Fade, FormControlLabel, Grow, Popover, Slide, styled, Typography, Zoom } from "@mui/material";
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import { useEffect, useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Switch from '@mui/material/Switch';
import Marquee from "react-fast-marquee";
import axios from "axios";
import { QueryClient, useMutation, useQuery, useQueryClient, } from "@tanstack/react-query";
import News from "../news/News";
import { TaskServices } from "../../services/tasks.services";
import UICheckbox from "../UI/UICheckbox";
import { Task } from "../../models/tasks";
import UISwitch from "../UI/UISwitch";
import Ticker from "../ticker/Ticker";

//TODOlist with WUI and React-Query

const ToDoLits = () => {
  const [checked, setChecked] = useState(true);
  const [openSettings, setOpenSettings] = useState(false);
  const [ticker, setTicker] = useState(true);


  const queryClient = useQueryClient();

  //get tasks
  const { data: response } = useQuery(['tasks'], () => TaskServices.gelAll())

  //update tasks
  const mutation = useMutation(['tasks'], (task: Task) => TaskServices.update(task), {
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  })

  //update tasks
  const mutat = (task: Task) => {
    mutation.mutate({ ...task, done: !task.done })
  }

  //slice description tasks
  const sliceTextTasks = (desc: string) => {
    if (desc.length > 25) {
      return desc.slice(0, 25) + '...'
    } else {
      return desc;
    }
  }



  const todayTasks = () => {
    const tasks = response?.data.filter((item: Task) => item.date === 'today')
    if (tasks.length > 0 && checked) {
      return (
        <Zoom in={checked}>
          <Box sx={{
            borderRadius: 5, mb: 2, bgcolor: '#282828',
            boxShadow: '-4px -4px 12px 0px rgba(255, 255, 255, 0.1), 5px 5px 24px 2px rgba(2, 2, 2, 0.35)', p: 2
          }}>

            {tasks.map((task: Task, index2: number) => {
              const body = sliceTextTasks(task.body)

              return (
                <Box key={index2} sx={{ display: 'flex', mt: "10px", mb: "10px" }}>
                  <Box sx={{ border: `2px solid ${task.color}`, borderRadius: 50, bgcolor: `${task.color}` }} />
                  <Box sx={{ display: 'flex', alignItems: 'center', ml: '12px', width: '100%', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <Typography sx={{ color: '#f4f4f4', fontWeight: 600, fontSize: 18, textDecoration: `${task.done && 'line-through'}` }}>
                        {task.title}
                      </Typography>
                      <Typography sx={{ color: '#797979', fontSize: '11px', fontWeight: 600 }}>
                        {body}
                      </Typography>
                    </Box>
                    <UISwitch
                      onClick={() => mutat(task)}
                      checked={task.done}
                    />
                  </Box>
                </Box>
              )
            })}
          </Box>
        </Zoom>
      )
    }
  }



  return (
    <Box sx={{ mt: 10, bgcolor: '#222222', borderRadius: 5, width: '330px', position: 'relative' }}>

      <Box sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography sx={{ fontWeight: 600, fontSize: 26, ml: 1 }}>To Do</Typography>
          <SettingsRoundedIcon onClick={() => setOpenSettings(true)} sx={{ cursor: 'pointer' }} />
        </Box>

        {/* сheckbox toggle today tasks */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <UICheckbox
            checked={checked}
            onChange={(event) => setChecked(event.target.checked)}
          />
          <Typography sx={{ fontWeight: 600 }}>Today Tasks:</Typography>
        </Box>

        {/* today tasks */}
        {response?.data && todayTasks()}

        {/* other tasks */}
        {date.map((date: string, index: number) => {
          return (
            <Accordion key={index} sx={{
              borderRadius: 5, mb: 2, bgcolor: '#282828',
              boxShadow: '-4px -4px 12px 0px rgba(255, 255, 255, 0.1), 5px 5px 24px 2px rgba(2, 2, 2, 0.35)',

              '&.Mui-expanded:last-of-type': {
                borderRadius: 5
              },
              '&:last-of-type': {
                borderRadius: 5
              },
              '&:before': {
                height: 0
              }
            }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ borderRadius: '50%', fontSize: '15px', bgcolor: '#f4f4f4', color: '#585858' }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Box sx={{ border: `2px solid #a9a9a9`, borderRadius: 50, mr: 1, bgcolor: `#a9a9a9` }} />
                <Typography sx={{ color: '#f4f4f4', fontWeight: 600, fontSize: 16, }}>{date}</Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Box >
                  {response?.data.map((task: Task, index2: number) => {
                    if (task.date !== date) {
                      return ''
                    }
                    const body = sliceTextTasks(task.body)

                    return (
                      <Box key={index2} sx={{ display: 'flex', mt: "10px", mb: "10px" }}>
                        <Box sx={{ border: `2px solid ${task.color}`, borderRadius: 50, bgcolor: `${task.color}` }} />
                        <Box sx={{ display: 'flex', alignItems: 'center', ml: '12px', width: '100%', justifyContent: 'space-between' }}>
                          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography sx={{ color: '#f4f4f4', fontWeight: 600, fontSize: 18, textDecoration: `${task.done && 'line-through'}` }}>
                              {task.title}
                            </Typography>
                            <Typography sx={{ color: '#797979', fontSize: '11px', fontWeight: 600 }}>
                              {body}
                            </Typography>
                          </Box>
                          <UISwitch
                            onClick={() => mutat(task)}
                            checked={task.done}
                          />
                        </Box>
                      </Box>
                    )
                  })}
                </Box>
              </AccordionDetails>
            </Accordion>
          )
        })}

        {/* ticker */}
        <Ticker ticker={ticker} />
      </Box>

      {/* settings */}
      {openSettings &&
        <ClickAwayListener onClickAway={() => setOpenSettings(false)}>
          <Fade timeout={300} in={openSettings}>
            <Box sx={{
              boxShadow: '-4px -4px 12px 0px rgba(255, 255, 255, 0.15), 5px 5px 24px 2px rgba(2, 2, 2, 0.65)',
              position: 'absolute',
              top: 50,
              right: 30,
              display: 'flex',
              alignItems: 'center',
              bgcolor: '#454444',
              p: 2,
              borderRadius: 5,
            }}>
              <Typography sx={{ mr: 3, width: '100px' }}>{ticker ? 'Hide' : 'Open'} ticker</Typography>
              <UISwitch
                checked={ticker}
                onChange={(e) => setTicker(e.target.checked)}
              />
            </Box>
          </Fade>
        </ClickAwayListener>
      }


    </Box>
  )
}

const date = ['tomorrow', '09/07']



export default ToDoLits;