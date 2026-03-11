# VIIT Chatbot Database Schemas

## Collections:

### 1. faqs
- question: String
- answer: String
- category: String
- keywords: Array

### 2. eapcet_ranks
- branch: String
- category: String
- opening_rank: Number
- closing_rank: Number
- seats: Number
- year: Number

### 3. branches
- name: String
- code: String
- seats: Number
- fee_convener: Number
- fee_management: Number
- labs: Array
- faculty_count: Number

### 4. hostel
- type: String
- fee_per_year: Number
- capacity: Number
- facilities: Array
- rules: Array

### 5. bus_routes
- route_name: String
- stops: Array
- timing_morning: String
- timing_evening: String
- fee_per_year: Number

### 6. placements
- company: String
- year: Number
- package_min: Number
- package_max: Number
- students_placed: Number
- branch: String

### 7. fests
- name: String
- type: String
- description: String
- events: Array
- duration: String
- month: String
- participation: String
- prizes: String

### 8. sessions
- session_id: String
- messages: Array
- created_at: Date
- updated_at: Date