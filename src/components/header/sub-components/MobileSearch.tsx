const MobileSearch: React.FC = () => {
  return (
    <div className="offcanvas-mobile-search-area">
      <form action="#">
        <input type="search" placeholder="Search ..." />
        <button type="submit">
          <i className="fa fa-search" />
        </button>
      </form>
    </div>
  );
};

export default MobileSearch;
