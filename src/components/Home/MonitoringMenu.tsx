import { BoxArrowUpRight, TelephoneOutbound, VolumeDown } from "react-bootstrap-icons";

const MonitoringMenu = () => {
  return (
    <div className="app-container flex-col p-2 gap-2">
      <div className="menu-title">監 視</div>
      <div className="rounded-md ">
        <div className="bg-[#434343] rounded-t-md text-white py-1 px-2 text-left">情報一覧</div>
        <div className="bg-[#2E2E2E] rounded-b-md ">
          <div className="py-2 px-4 border-b-black border-b">
            <textarea rows={5} className="w-full rounded-md" />
          </div>
          <div className="py-2 px-4 border-b-black border-b flex gap-2 justify-between w-full items-center">
            <div className="w-full items-center h-full flex">
              <select className="p-2 w-full rounded-md" />
            </div>
            <div className="w-36">
              <button className="bg-[#FF004E] hover:opacity-75 text-white rounded-full px-4 py-1 text-nowrap">実 行</button>
            </div>
          </div>
          <div className="py-2 px-4 flex flex-col gap-4 justify-between w-full items-center">
            <div className="flex w-full gap-2">
              <div className="w-full items-center h-full flex">
                <select className="p-2 w-full rounded-md" />
              </div>
              <div className="w-36" />
            </div>
            <div className="flex w-full gap-2">
              <div className="w-full items-center h-full flex">
                <select className="p-2 w-full rounded-md" />
              </div>
              <div className="w-36" >
                <button className="bg-[#01CBA4] hover:opacity-75 text-white rounded-full px-4 py-1 text-nowrap">移 動</button>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Menu Multi Item start */}

      <div className="app-container gap-3 flex-col scroll pr-1">

        {/* Menu Itmes start */}

        {
          Array.from({ length: 5 }).map((_, i) => (
            <div className="rounded-md " key={i}>
              <div className="bg-[#434343] rounded-t-md text-white py-2 px-2 text-left flex justify-between items-center">
                <span className="w-full">ID xxxxxx</span>
                <select className="px-2 py-1 w-72 text-black rounded-md" />
              </div>

              <div className="bg-[#2E2E2E] rounded-b-md ">
                <div className="py-2 px-4 border-b-black border-b flex items-center">
                  <div className="flex flex-col gap-3 w-full">
                    <div className="px-3 py-1 rounded-md bg-white text-left ">自動運転モード</div>
                    <div className="px-3 py-1 rounded-md bg-white text-left ">車両状態</div>
                    <div className="flex items-center">
                      <div className="px-3 py-1 rounded-md bg-white text-left w-full">速度</div>
                      <div className="w-full text-white text-left pl-2">km/h</div>
                    </div>
                  </div>
                  <div className="w-full flex gap-3 justify-center">
                    <button className="rounded-full w-14 h-14 flex justify-center items-center">
                      <BoxArrowUpRight size={22} color="#01CBA4" />
                    </button>
                    <button className="rounded-full w-14 h-14 flex justify-center items-center">
                      <TelephoneOutbound size={22} color="#01CBA4" />
                    </button>
                    <button className="rounded-full w-14 h-14 flex justify-center items-center">
                      <VolumeDown size={32} color="#01CBA4" />
                    </button>
                  </div>
                </div>
                <div className="py-2 px-4 border-b-black border-b flex gap-2 justify-center w-full items-center">
                  <button className="bg-[#FF004E] hover:opacity-75 text-white rounded-full px-4 py-1 text-nowrap">緊急停止</button>
                </div>
              </div>
            </div>
          ))
        }

        {/* Menu Itmes end */}




      </div>

      {/* Menu Multi Item end */}

    </div>
  )
}

export default MonitoringMenu