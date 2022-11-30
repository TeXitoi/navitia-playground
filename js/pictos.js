// Copyright (c) 2016 Hove
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

'use strict';

var pictos = {};

pictos.makePtPicto = function(json) {
    if ($.isArray(json)) {
        var res = $('<span/>');
        json.forEach(function(elt) {
            res.append(pictos.makePtPicto(elt));
        });
        return res;
    }

    if (!(json instanceof Object) || !('id' in json)) {
        return $('<span/>');
    }
    var physical_mode_img = {
        'physical_mode:Air': 'Air',
        'physical_mode:Bike': 'Bike',
        'physical_mode:BikeSharingService': 'BikeSharingService',
        'physical_mode:Car': 'Car',
        'physical_mode:Coach': 'Coach',
        'physical_mode:Metro': 'Metro',
        'physical_mode:Taxi': 'Taxi',
        'physical_mode:Tramway': 'Tramway',
        'physical_mode:Walking': 'Walking',
        'physical_mode:CheckIn': 'CheckIn',
        'physical_mode:CheckOut': 'CheckOut',
        'physical_mode:Shuttle': 'Shuttle',

        'physical_mode:Funicular': 'Funicular',
        'physical_mode:SuspendedCableCar': 'Funicular',

        'physical_mode:Bus': 'Bus',
        'physical_mode:BusRapidTransit': 'Bus',
        'physical_mode:Trolleybus': 'Bus',

        'physical_mode:RapidTransit': 'Train',
        'physical_mode:LocalTrain': 'Train',
        'physical_mode:LongDistanceTrain': 'Train',
        'physical_mode:Train': 'Train',
        'physical_mode:RailShuttle': 'Train',

        'physical_mode:Boat': 'Boat',
        'physical_mode:Ferry': 'Boat',
    };
    var img = physical_mode_img[json.id] || 'Unknown';
    return pictos.makeImg(img, json.name);
};

pictos.makeImg = function(img, name) {
    return pictos.makeImgFromUrl(sprintf('img/pictos/%s.svg', img), name);
};

pictos.makeImgFromUrl = function(img, name) {
    var tag = $('<img/>')
        .addClass('picto')
        .attr('src', img);
    if (name) { tag.attr('alt', name); tag.attr('title', name); }
    return tag;
};

pictos.makeSnPicto = function(mode) {
    var mode_img = {
        'walking': 'Walking',
        'bike': 'Bike',
        'bss': 'BikeSharingService',
        'car' : 'Car',
        'carnopark': 'Car',
        'park': 'Car',
        'leave_parking': 'Car',
        'ridesharing': 'RideSharing',
        'taxi': 'Taxi',
        'entrance': 'Entrance',
        'exit': 'Exit',
    };
    var img = mode_img[mode] || 'Unknown';
    return pictos.makeImg(img, mode);
};

pictos.makeEquipmentPicto = function(equipment) {
    var equipment_img = {
        'has_wheelchair_accessibility': 'Wheelchair',
        'has_wheelchair_boarding': 'Wheelchair',
        'has_bike_accepted': 'BikeAccepted',
        'has_bike_depot': 'BikeAccepted',
        'has_air_conditioned': 'AirConditioning',
        'has_visual_announcement': 'HearingImpairment',
        'has_audible_announcement': 'VisualImpairment',
        'has_appropriate_escort': 'Unknown',
        'has_appropriate_signage': 'MentalDisorder',
        'has_school_vehicle': 'SchoolBus',
        'has_elevator': 'Elevator',
        'has_escalator': 'Escalator',
        'has_sheltered': 'Shelter',
    };
    var img = equipment_img[equipment] || 'Unknown';
    return pictos.makeImg(img, equipment);
};

pictos.makeOccupancyPicto = function(occupancy) {
    var occupancy_img = {
        'empty': 'OccupancyLow',
        'many_seats_available': 'OccupancyLow',
        'few_seats_available': 'OccupancyMedium',
        'standing_room_only': 'OccupancyMedium',
        'crushed_standing_room_only': 'OccupancyHigh',
        'full': 'OccupancyHigh',
        'not_accepting_passengers': 'OccupancyHigh',
    };
    var img = occupancy_img[occupancy] || 'Unknown';
    return pictos.makeImg(img, occupancy);
};

