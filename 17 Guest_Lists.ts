

let Guest_List :string[] = ['Imran Khan', 'Nawaz Shareef', 'Asif Ali Zardari'];
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!')
// }
let absent_Guest :string = 'Imran Khan' ;
let new_Guest :string = 'Kamran Tessori' ;
Guest_List[0] = new_Guest ;

// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!')
// }
console.log(`Mr. ${absent_Guest} is not comming to the party.`);
console.log(`Good News! we find Big Table so we are inviting 3 more guest.`)

//Added 3 guest add there.
Guest_List.unshift('Sir Zia Khan');
Guest_List.splice(2 , 0 , 'Maryam Nawaz');
Guest_List.push('Bilawal Bhutto Zardari');

//There I will printed 6 array guest.
for(let i=0; i<Guest_List.length; i++){
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!')
}

//Sorry Message to guest not invited.
console.log(`\nSorry we can not arrange big table, Only Two peoples will be invited.`);

// There I will removes the Guest.
while(Guest_List.length > 2){
    let remove_Guest = Guest_List.pop();
    console.log(`Sorry Mr. ${remove_Guest}, you are not invited for the dinner`);
}

//our required 2 Invited Guest.
for(let i=0; i<Guest_List.length; i++){
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nyou are still invited.\n\nThank You!')
}

//I will remove all the Guest Array.
Guest_List.splice(0, 2);
console.log(Guest_List);





