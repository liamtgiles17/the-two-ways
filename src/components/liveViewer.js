import "./../app/globals.css";
import liveDates from "./../app/liveDates.js";
import Link from "next/link";

export default function LiveViewer(props) {
    let liveDatesData = liveDates();

    return (
        <div className="bg-offblack py-8 md:px-12 max-md:px-4 relative">
            <div className="text-white pb-4">
                <p className="text-4xl">UPCOMING DATES</p>
                {props.numDates === undefined &&
                    <p className="md:text-lg max-md:text-md py-2">All of our upcoming gigs are posted here. See you there!</p>
                }
            </div>

            <div style={props.numDates < liveDatesData.length ? {maskImage: "linear-gradient(#111 50%, transparent 95%)"} : {}} className="flex flex-col items-top justify-top space-y-4 w-full">
                {liveDatesData.slice(0, props.numDates).map((gig, i) => {
                    const dateArr = gig.date.split("-");
                    const formattedDate = `${dateArr[2]}/${dateArr[1]}/${dateArr[0]}`;
                    return (
                        <div key={i} className="md:px-12 max-md:px-2 py-4 text-center text-white border-gray-300 border-[1px] rounded-lg flex flex-grow items-center justify-between md:space-x-12 max-md:space-x-4">
                            <p className="md:text-xl max-md:text-sm">{formattedDate}</p>

                            <div className="flex-col items-center space-y-1 justify-center text-center">
                                <p className="md:text-md max-md:text-xs"><i>{gig.place}</i></p>
                                <p className="md:text-2xl max-md:text-lg"><b>{gig.venue}</b></p>
                                <p className="md:text-xl max-md:text-md">{gig.time}</p>
                            </div>

                            <Link href={gig.tickets}><div className="border-[2px] border-white rounded-lg md:px-4 max-md:px-1 py-2 text-center text-white hover:bg-gray-700 cursor-pointer hover:underline">
                                <p className="md:text-lg max-md:text-sm">Tickets</p>
                            </div></Link>
                        </div>
                    );
                })}
            </div>

            {props.numDates < liveDatesData.length &&
                <div style={{position: "absolute", bottom: "0%", left: "50%", transform: "translate(-50%, 0%)"}} className="mb-8 w-full">
                    <div className="flex items-center justify-center pt-2">
                        <Link href="/live"><div className="border-[2px] border-white rounded-lg md:px-4 max-md:px-1 py-2 text-center text-white hover:bg-gray-700 cursor-pointer hover:underline">
                            <p className="md:text-lg max-md:text-sm">See more </p>
                        </div></Link>
                    </div>
                </div>
            }
        </div>
    );
}