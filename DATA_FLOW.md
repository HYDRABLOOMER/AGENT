<p align="center">
  <img src="data_flow.png" width="600">
</p>




[Start]
  |
[User Logs In or Registers]
  |
[User Selects Activity]
  |
 <Activity Type?>
  |
  |---------------------------------------------------------------------------------------|
  |                                   |                                |                  |
(KNOWLEDGE MODULE)              (TASK MODULE)                 (REPORTING MODULE)    (OPINION FEED)
  |                                   |                                |                  |
[View Topic]                  [View Available Tasks]            [Report Issue]      [Post Opinion/Vote]
  |      \                            |        \                       |      \           |      \
  |    (Error)                        |      (Error)                   |    (Error)       |    (Error)
  |       |                           |         |                      |       |          |       |
[Attempt Quiz]                [Perform Real-World Task]         [Upload Image/Loc]  [AI Moderation]
  |      \                            |        \                       |      \           |      \
  |    (Error)                        |      (Error)                   |    (Error)       |    (Error)
  |       |                           |         |                      |       |          |       |
[Score Calculated]            [Upload Evidence]                 [Validation by Auth] [Reputation Score]
  |      \                            |        \                       |      \           |       |
  |    (Error)                        |      (Error)                   |    (Error)       |  [Opinion Error]
  |       |                           |         |                      |       |          |
[EcoPoints Awarded]           [AI Verification]                 [Status Updated]      |
  |      |                            |        \                       |              |
  | [Knowledge Error]                 |      (Error)                   |              |
  |                                   |         |               [Reporting Error]     |
  |                            <Passed AI Check?>                      |              |
  |                             /     |      \                         |              |
  |                          (No)   (Yes)  (Error)                     |              |
  |                           |       |       |                        |              |
  |             [Request Resubmission] [Manual Review]                 |              |
  |                                   |       |                        |              |
  |                                   |    (Error)                     |              |
  |                                   |       |                        |              |
  |                             [Task Approved]                        |              |
  |                                   |                                |              |
  |                        [EcoPoints & Badges Awarded]                |              |
  |                                   |          |                     |              |
  |                                   |     [Task Error]               |              |
  |                                   |                                |              |
  |___________________________________|________________________________|______________|
                                      |
                      [Leaderboard and Dashboard Update]
                                      |
                                    [End]
