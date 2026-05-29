export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      notifications: {
        Row: {
          body: string
          created_at: string
          id: string
          read: boolean
          title: string
          type: string
          user_id: string
        }
        Insert: {
          body?: string
          created_at?: string
          id?: string
          read?: boolean
          title: string
          type: string
          user_id: string
        }
        Update: {
          body?: string
          created_at?: string
          id?: string
          read?: boolean
          title?: string
          type?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "notifications_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      portfolio_items: {
        Row: {
          completed_at: string
          composite_score: number | null
          file_url: string | null
          id: string
          is_public: boolean
          simulation_title: string
          submission_id: string | null
          task_title: string
          user_id: string
        }
        Insert: {
          completed_at?: string
          composite_score?: number | null
          file_url?: string | null
          id?: string
          is_public?: boolean
          simulation_title: string
          submission_id?: string | null
          task_title: string
          user_id: string
        }
        Update: {
          completed_at?: string
          composite_score?: number | null
          file_url?: string | null
          id?: string
          is_public?: boolean
          simulation_title?: string
          submission_id?: string | null
          task_title?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "portfolio_items_submission_id_fkey"
            columns: ["submission_id"]
            isOneToOne: false
            referencedRelation: "task_submissions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "portfolio_items_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          career_goal: string | null
          created_at: string
          daily_goal_min: number
          email: string | null
          experience_level: string | null
          first_name: string | null
          id: string
          language: string
          last_name: string | null
          name: string
          onboarding_complete: boolean
          reason: string | null
          role: string
          selected_tracks: string[]
          starting_level: string
          subscription_status: string
          subscription_tier: string
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          career_goal?: string | null
          created_at?: string
          daily_goal_min?: number
          email?: string | null
          experience_level?: string | null
          first_name?: string | null
          id: string
          language?: string
          last_name?: string | null
          name?: string
          onboarding_complete?: boolean
          reason?: string | null
          role?: string
          selected_tracks?: string[]
          starting_level?: string
          subscription_status?: string
          subscription_tier?: string
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          career_goal?: string | null
          created_at?: string
          daily_goal_min?: number
          email?: string | null
          experience_level?: string | null
          first_name?: string | null
          id?: string
          language?: string
          last_name?: string | null
          name?: string
          onboarding_complete?: boolean
          reason?: string | null
          role?: string
          selected_tracks?: string[]
          starting_level?: string
          subscription_status?: string
          subscription_tier?: string
          updated_at?: string
        }
        Relationships: []
      }
      simulation_sessions: {
        Row: {
          completed_at: string | null
          current_task_index: number
          id: string
          overall_crs: number | null
          retry_count: number
          simulation_id: string
          started_at: string
          status: string
          user_id: string
        }
        Insert: {
          completed_at?: string | null
          current_task_index?: number
          id?: string
          overall_crs?: number | null
          retry_count?: number
          simulation_id: string
          started_at?: string
          status?: string
          user_id: string
        }
        Update: {
          completed_at?: string | null
          current_task_index?: number
          id?: string
          overall_crs?: number | null
          retry_count?: number
          simulation_id?: string
          started_at?: string
          status?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "simulation_sessions_simulation_id_fkey"
            columns: ["simulation_id"]
            isOneToOne: false
            referencedRelation: "simulations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "simulation_sessions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      simulations: {
        Row: {
          career_track: string
          color_from: string
          color_to: string
          company_description: string
          company_name: string
          created_at: string
          demand_percent: number
          difficulty: string
          employer_id: string | null
          enrolled_count: number
          estimated_hours: number
          id: string
          job_title: string
          label: string | null
          publish_status: string
          rating: number
          title: string
          weeks: number
        }
        Insert: {
          career_track: string
          color_from?: string
          color_to?: string
          company_description?: string
          company_name: string
          created_at?: string
          demand_percent?: number
          difficulty: string
          employer_id?: string | null
          enrolled_count?: number
          estimated_hours?: number
          id?: string
          job_title: string
          label?: string | null
          publish_status?: string
          rating?: number
          title: string
          weeks?: number
        }
        Update: {
          career_track?: string
          color_from?: string
          color_to?: string
          company_description?: string
          company_name?: string
          created_at?: string
          demand_percent?: number
          difficulty?: string
          employer_id?: string | null
          enrolled_count?: number
          estimated_hours?: number
          id?: string
          job_title?: string
          label?: string | null
          publish_status?: string
          rating?: number
          title?: string
          weeks?: number
        }
        Relationships: [
          {
            foreignKeyName: "simulations_employer_id_fkey"
            columns: ["employer_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      task_submissions: {
        Row: {
          accuracy_score: number | null
          ai_feedback: Json | null
          communication_score: number | null
          composite_score: number | null
          content: string | null
          evaluation_status: string
          file_url: string | null
          id: string
          presentation_score: number | null
          problem_solving_score: number | null
          reasoning_score: number | null
          session_id: string
          submitted_at: string
          task_id: string
          user_id: string
        }
        Insert: {
          accuracy_score?: number | null
          ai_feedback?: Json | null
          communication_score?: number | null
          composite_score?: number | null
          content?: string | null
          evaluation_status?: string
          file_url?: string | null
          id?: string
          presentation_score?: number | null
          problem_solving_score?: number | null
          reasoning_score?: number | null
          session_id: string
          submitted_at?: string
          task_id: string
          user_id: string
        }
        Update: {
          accuracy_score?: number | null
          ai_feedback?: Json | null
          communication_score?: number | null
          composite_score?: number | null
          content?: string | null
          evaluation_status?: string
          file_url?: string | null
          id?: string
          presentation_score?: number | null
          problem_solving_score?: number | null
          reasoning_score?: number | null
          session_id?: string
          submitted_at?: string
          task_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "task_submissions_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "simulation_sessions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "task_submissions_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "tasks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "task_submissions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      tasks: {
        Row: {
          created_at: string
          deadline_hours: number
          id: string
          instructions: string
          manager_brief: string
          position: number
          simulation_id: string
          title: string
          type: string
        }
        Insert: {
          created_at?: string
          deadline_hours?: number
          id?: string
          instructions?: string
          manager_brief?: string
          position?: number
          simulation_id: string
          title: string
          type: string
        }
        Update: {
          created_at?: string
          deadline_hours?: number
          id?: string
          instructions?: string
          manager_brief?: string
          position?: number
          simulation_id?: string
          title?: string
          type?: string
        }
        Relationships: [
          {
            foreignKeyName: "tasks_simulation_id_fkey"
            columns: ["simulation_id"]
            isOneToOne: false
            referencedRelation: "simulations"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">
type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never
