from typing import Any, Text, Dict, List
from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher

class ActionAddWallet(Action):
    def name(self) -> Text:
        return "action_add_wallet"

    def run(self, dispatcher: CollectingDispatcher, tracker: Tracker, domain: Dict[Text, Any]):
        wallet_address = tracker.get_slot("wallet_address")
        if wallet_address:
            dispatcher.utter_message(text=f"Wallet {wallet_address} has been added successfully!")
        else:
            dispatcher.utter_message(text="Please provide a valid wallet address.")
        return []

class ActionMergeWallets(Action):
    def name(self) -> Text:
        return "action_merge_wallets"

    def run(self, dispatcher: CollectingDispatcher, tracker: Tracker, domain: Dict[Text, Any]):
        wallets = tracker.get_slot("wallet_address")
        target_wallet = tracker.get_slot("target_wallet")
        dispatcher.utter_message(text=f"Merging wallets {wallets} into {target_wallet}.")
        return []

class ActionMultiSend(Action):
    def name(self) -> Text:
        return "action_multisend"

    def run(self, dispatcher: CollectingDispatcher, tracker: Tracker, domain: Dict[Text, Any]):
        sender_wallet = tracker.get_slot("wallet_address")
        recipient_wallets = tracker.get_slot("recipient_wallet")
        amount = tracker.get_slot("amount")
        dispatcher.utter_message(text=f"Sending {amount} tokens from {sender_wallet} to {recipient_wallets}.")
        return []

class ActionSwapTokens(Action):
    def name(self) -> Text:
        return "action_swap_tokens"

    def run(self, dispatcher: CollectingDispatcher, tracker: Tracker, domain: Dict[Text, Any]):
        amount = tracker.get_slot("amount")
        token = tracker.get_slot("target_token")
        wallet = tracker.get_slot("wallet_address")
        dispatcher.utter_message(text=f"Swapping {amount} tokens to {token} in wallet {wallet}.")
        return []
