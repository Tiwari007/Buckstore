import classes from '../App.module.css'
import { InfinitySpin } from 'react-loader-spinner'

const Loading = () => {
  return (
    <div className={classes.loading__container}>
      <InfinitySpin
        width='200'
        color="#4fa94d"
      />
    </div>
  )
}

export default Loading