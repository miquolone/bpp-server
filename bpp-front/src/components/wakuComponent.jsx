const WakuComponent = (memberProps) => {
  return (
    <>
      <div className={ "gg" }>
        <div className={ "aa" }>
          <div className={ "bb" }>
            <img className={ "cc" } src={ memberProps.member.image ?? '/assets/images/ume.webp' } alt={ "" }/></div>
          <div className={ "dd" }>{ memberProps.member.title ?? "------" }</div>
        </div>
        <div className={ "ee" }>
          <p className={ "ff" }>{ memberProps.member.description ?? "---" }</p>
        </div>
      </div>
    </>
  );
};

export default WakuComponent;