import Video from "./Video";
import Article from "./Article";
import HocViews from "./HocViews";

function List(props) {
  const HocedVideo = HocViews(Video);
  const HocedArticle = HocViews(Article);
  return props.list.map(item => {
    switch (item.type) {
      default:
        return (
          <HocedVideo {...item} />
        );

      case 'article':
        return (
          <HocedArticle {...item} />
        );
    }
  });
};

export default List;
