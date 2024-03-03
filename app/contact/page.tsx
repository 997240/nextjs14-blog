import React from 'react';
import {Card} from "@/components/ui/card";

function contact() {
    return (
        <div>
            <Card className="max-w-md mx-auto  rounded-lg overflow-hidden shadow-lg">
                <img className="w-full" src="https://testrigor.com/wp-content/uploads/2023/04/nextjs-logo-square.png"
                     alt="Image description"/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Card Title12</div>
                    <p className=" font-light text-base ">
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        Here is some example text that might go into a card's description or body. It might include
                        details about the content of the card, or provide a brief overview of the subject matter. This
                        text is designed to overflow so we can see the effect of the line-clamp utility.
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2 flex flex-wrap">
                    <span
                        className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tag1</span>
                    <span
                        className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tag2</span>
                    <span
                        className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tag3</span>
                    <span
                        className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tag4</span>
                </div>

            </Card>
        </div>
    );
}

export default contact;