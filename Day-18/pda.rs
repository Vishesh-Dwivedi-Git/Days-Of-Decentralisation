use anchor_lang::prelude::*;
use anchor_lang::solana_program::pubkey::Pubkey;

#[program]
pub mod my_program {
    use super::*;

    pub fn create_account(ctx: Context<CreateAccount>, seed: String) -> Result<()> {
        // Derive the PDA
        let pda = Pubkey::find_program_address(&[seed.as_bytes()], ctx.program_id);
        
        // Create the PDA account
        let account = &mut ctx.accounts.pda_account;
        account.owner = pda.0; // Set the owner to the PDA
        account.data = 0; // Initialize data (example)
        
        Ok(())
    }
}

#[derive(Accounts)]
pub struct CreateAccount<'info> {
    #[account(init, payer = user, space = 8 + 64)] // Space for account data
    pub pda_account: Account<'info, MyPDA>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[account]
pub struct MyPDA {
    pub owner: Pubkey,
    pub data: u64,
}
