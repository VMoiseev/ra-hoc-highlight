function Video(props) {
  return (
    <div className="item item-video">
      <iframe src={props.url} title={props.title} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      <p className="views">Просмотров: {props.views}</p>
    </div>
  )
};

export default Video;
