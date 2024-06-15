const AnnouncementCard = ({ announcement }) => {
  return (
    <div>
        <form className="shadow-xl p-5 space-y-4">
          <div className="flex items-center">
            <input
              type="text"
              className="py-2 font-bold px-3 shadow-md focus:outline-none border w-full"
              name="title"
              defaultValue={announcement.title}
              placeholder="Write a title"
            />
          </div>
          <div className="flex items-center">
            <textarea
              name="description"
              id="description"
              defaultValue={announcement.description}
              placeholder="Write desciption........"
              cols="30"
              rows="10"
              className="py-2 opacity-95 px-3 focus:outline-none border-b w-full"
            ></textarea>
          </div>
        </form>
    </div>
  );
};

export default AnnouncementCard;
