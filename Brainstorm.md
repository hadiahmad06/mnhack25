## *PROMPT*:
An app that fosters strong local communities.

## *IDEA*: Rideshare App
Carpooling with people in your local community

Name: **swagwagon**
- viae


### Profile View
What users can see about other users.
- Swipe like tinder -> detailed view
- Thumbs up and thumbs down
- reports
- sort by, distance, ratings.
- filter by, verification, age, gender.
- includes groups/tags "UMN" "
- background check

```js
type Gender = 'male' | 'female' | 'nb' | 'other';

interface Preferences {
  minRiders: number;
  maxRiders: number; // 0 means no preference

  minAge: number;
  maxAge: number; // 0 means no preference

  verification: boolean;
  genderPreferences: { gender: Gender; preferred: boolean }[];

  maxExtraTime?: number; // Optional
}

interface Rating {
  change: bool // false for down, true for up
}

interface Location {
  latitude: number;
  longitude: number;
  address?: string;
}

interface Profile {
  verification: boolean;

  ratings: Rating[];
  up: number;
  down: number;

  name: string;
  origin: Location;
  destinations: Location[];

  age: number;
  gender: Gender;
}
```


### Chat:
- check in for a trip 12 hours prior


### Implementation:
- iOS and Android
- React Native -> Xcode & Android

### Pseudocode



<!-- ## IDEAS:
1. religions
2. college clubs
3. Public safety
4. Volunteering
5. Friend meetup app
6. Platform for exchanging skills and services
7. Report local issues (grafiti potholes etc.)
8. Community classes.
9. Study groups
10. Library of things. 
11.  -->

<!-- ```swift
class Preferences {
    // if max == 0 -> no preference
    var minRiders: Int
    var maxRiders: Int

    // if max == 0 -> no preference
    var minAge: Int
    var maxAge: Int

    var verification: Bool
    var gender: [(Gender, Bool)]
    
    // extra time added to their commute
    var maxExtraTime: Int?
}

class Profile {
    var verification: Bool

    var ratings: [Rating]
    let up: Int
    let down: Int

    var name: String
    var origin: Location
    var destinations: [Location]

    var age: Int
    var gender: Gender

    enum Gender {
        case male, female, nb, other;
    }
}
``` -->

### Google maps api
Time between destination time to pick up someone travel time
ORSM