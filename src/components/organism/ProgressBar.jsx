import React from 'react'
import { ProgressBar } from 'react-bootstrap'



const ProgressBarContainer = ({ now }) => <ProgressBar striped bsStyle="success" now={Number(now)} label={`${now}%`} />




export { ProgressBarContainer }