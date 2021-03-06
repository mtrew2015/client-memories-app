import React from 'react';
import {Grid, CircularProgress} from '@material-ui/core'
import Post from './Post/Post';
import useStyles from './styles';
import {useSelector} from 'react-redux'

const Posts = ({setCurrentId}) => {
  const posts = useSelector((state) => state.posts) || []
  console.log(posts)
  const classes = useStyles();
  return (
    !posts.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts && posts.map((post) => (
          <Grid item key={post._id} xs={12} sm={6}>
            <Post setCurrentId={setCurrentId} post={post} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts;
