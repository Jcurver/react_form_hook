import React from "react";


const Detail = (props) => {
  // const dispatch = useDispatch();
  // const history = useHistory();
  // // 스토어에서 상태값 가져오기

  // // url 파라미터에서 인덱스 가져오기
  // const params = useParams();
  // const bucket_index = params.index;
  // const bucket_list = useSelector((state) => state.bucket.list);

  
  return (
    <div>
      {/* <h1>{bucket_list[bucket_index] ? bucket_list[bucket_index].text : ""}</h1>
      <Button variant="outlined" color="primary"
        onClick={() => {
          // dispatch(updateBucket(bucket_index));
          dispatch(updateBucketFB(bucket_list[bucket_index].id));
        }}
      >
        완료하기
      </Button>
      <Button variant="outlined" color="secondary"
        onClick={() => {

          dispatch(deleteBucketFB(bucket_list[bucket_index].id));
          history.goBack();
        }}
      >
        삭제하기
      </Button> */}
      상세 페이지입니다.
    </div>
  );
};

export default Detail;
