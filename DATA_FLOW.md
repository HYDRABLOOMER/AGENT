graph TD
    Start([Start]) --> Login[User Logs In or Registers]
    Login --> SelectActivity[User Selects Activity]
    SelectActivity --> ActivityType{Activity Type?}

    %% Knowledge Module
    ActivityType -- Knowledge Module --> ViewTopic[View Topic]
    ViewTopic --> AttemptQuiz[Attempt Quiz]
    AttemptQuiz --> ScoreCalculated[Score Calculated]
    ScoreCalculated --> EcoPointsAwarded[EcoPoints Awarded]
    
    ViewTopic -- Error --> KnowledgeError[Knowledge Error]
    AttemptQuiz -- Error --> KnowledgeError
    ScoreCalculated -- Error --> KnowledgeError

    %% Task Module
    ActivityType -- Task Module --> ViewTasks[View Available Tasks]
    ViewTasks --> PerformTask[Perform Real-World Task]
    PerformTask --> UploadEvidence[Upload Evidence]
    UploadEvidence --> AIVerification[AI Verification]
    AIVerification --> AICheck{Passed AI Check?}
    
    AICheck -- No --> RequestResubmission[Request Resubmission]
    AICheck -- Yes --> ManualReview[Manual Review by Admin or NGO]
    ManualReview --> TaskApproved[Task Approved]
    TaskApproved --> EcoPointsBadges[EcoPoints and Badges Awarded]
    
    ViewTasks -- Error --> TaskError[Task Error]
    PerformTask -- Error --> TaskError
    UploadEvidence -- Error --> TaskError
    AIVerification -- Error --> TaskError
    ManualReview -- Error --> TaskError

    %% Reporting Module
    ActivityType -- Reporting Module --> ReportIssue[Report Issue]
    ReportIssue --> UploadImageLoc[Upload Image and Location]
    UploadImageLoc --> Validation[Validation by Authority]
    Validation --> StatusUpdated[Status Updated]
    
    ReportIssue -- Error --> ReportingError[Reporting Error]
    UploadImageLoc -- Error --> ReportingError
    Validation -- Error --> ReportingError

    %% Opinion Feed
    ActivityType -- Opinion Feed --> PostOpinion[Post Opinion or Vote or Comment]
    PostOpinion --> AIModeration[AI Moderation]
    AIModeration --> ReputationScore[Reputation Score Updated]
    
    PostOpinion -- Error --> OpinionError[Opinion Error]
    AIModeration -- Error --> OpinionError

    %% End Sequence
    EcoPointsAwarded --> LeaderboardUpdate[Leaderboard and Dashboard Update]
    EcoPointsBadges --> LeaderboardUpdate
    StatusUpdated --> LeaderboardUpdate
    ReputationScore --> LeaderboardUpdate
    
    LeaderboardUpdate --> End([End])

    subgraph Knowledge_Module [KNOWLEDGE MODULE]
        ViewTopic
        AttemptQuiz
        ScoreCalculated
        EcoPointsAwarded
        KnowledgeError
    end

    subgraph Task_Module [TASK MODULE]
        ViewTasks
        PerformTask
        UploadEvidence
        AIVerification
        AICheck
        RequestResubmission
        ManualReview
        TaskApproved
        EcoPointsBadges
        TaskError
    end

    subgraph Reporting_Module [REPORTING MODULE]
        ReportIssue
        UploadImageLoc
        Validation
        StatusUpdated
        ReportingError
    end

    subgraph Opinion_Feed [OPINION FEED]
        PostOpinion
        AIModeration
        ReputationScore
        OpinionError
    end
